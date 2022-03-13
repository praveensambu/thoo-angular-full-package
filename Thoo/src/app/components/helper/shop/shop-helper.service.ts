import { Injectable, AfterContentInit, OnInit, Directive } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import shop from '../../data/shop/shop.json';
import shopcategory from '../../data/shop/category.json';
import shoptags from '../../data/tags.json';
import author from '../../data/team.json';
import { Options, LabelType } from "@angular-slider/ngx-slider";

@Injectable({
  providedIn: 'root'
})
@Directive({})
export class ShopHelperService implements AfterContentInit, OnInit {

  // pagination
  page: number = 1;
  // Shop
  public shopblock = shop;
  public shopdetails = shop;
  // Category
  public category: any[] = shopcategory;
  public shopcategory = shopcategory;
  // Tags
  public tags: any[] = shoptags;
  public shoptags = shoptags;
  // Price
  public minPrice: number;
  public maxPrice: number;
  // Extra
  public searchText: string;
  public searchQuery: string;
  constructor(private router: ActivatedRoute, private route: Router) {
    this.minPrice = 0;
    this.maxPrice = 0;
    this.searchText = '';
    this.searchQuery = '';
  }
  // Category
  public getCategories(items: string | any[]) {
    var elems = shopcategory.filter((item: { id: string; }) => {
      return items.includes(item.id)
    });
    return elems;
  }
  // Author
  public getAuthor(items: string | any[]) {
    var elems = author.filter((item: { id: string; }) => {
      return items.includes(item.id)
    });
    return elems;
  }
  // Tags
  public getTags(items: string | any[]) {
    var elems = shoptags.filter((item: { id: string; }) => {
      return items.includes(item.id)
    });
    return elems;
  }
  // Count Category
  public setCategoriesCount() {
    for (var i = 0; i < this.shopcategory.length; i++) {
      var count = this.shopblock.filter((item: { category: number[]; }) => { return item.category.includes(parseInt(this.shopcategory[i].id)) });
      count = count.length;
      this.shopcategory[i].count = count;
    }
  }
  // Related shop
  public getShopByCategory(items: string | any[]): any[] {
    var elems = shop.filter((shop: { id: string; category: any[]; }) => { return parseInt(shop.id) !== parseInt(this.router.snapshot.params.id) && shop.category.some(r => items.includes(r)) });
    return elems;
  }
  // Recent item
  public changeToMonth(month: string | number | any) {
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return months[month];
  }
  public setDemoDate() {
    var today = new Date();
    this.shopblock.slice(0, 4).map((item: { timestamp: number; itemdate: string; }) => (
      item.timestamp = today.getTime() - (3 * 24 * 60 * 60 * 1000),
      // Remove this date on your live demo. This is only used for preview purposed. Your date should actually be updated
      // in the blog.json object
      item.itemdate = `${today.getDate() - 2} ${this.changeToMonth(today.getMonth()).slice(0, 3)}, ${today.getFullYear()}`
    ));
  }
  public getRecentPost(): any[] {
    var elems = shop.filter((item: { timestamp: number | any; itemdate: string | number | Date; }) => {
      return item.timestamp < new Date(item.itemdate);
    });
    return elems;
  }
  // Shop Details
  public setShop(id: any) {
    this.shopdetails = shop.filter((item: { id: any; }) => { return item.id == id });
  }
  // Search Filter
  onSubmit() {
    if (this.searchText === "") {
      return;
    } else {
      this.route.navigate(['shop/search', this.searchText]);
    }
  }
  // Category Filter
  public setCategory(id: any) {
    this.shopcategory = id;
  }
  public getCategory() {
    return this.shopcategory;
  }
  public getShopsByCategory(catId: string) {
    return this.shopblock = shop.filter((item: { category: number[]; }) => { return item.category.includes(parseInt(catId)) });
  }
  // Tag Filter
  public setTag(id: any) {
    this.shoptags = id;
  }
  public getTag() {
    return this.shoptags;
  }
  public getPostsByTags(tagId: string) {
    return this.shopblock = shop.filter((item: { tags: number[]; }) => { return item.tags.includes(parseInt(tagId)) });
  }
  // Search Filter
  public setSearch(query: string) {
    this.searchQuery = query;
  }
  public getSearch() {
    return this.searchQuery;
  }
  public getPostsBySearch(query: string) {
    return this.shopblock = shop.filter((item: { title: (string) }) => {
      return item.title.toLowerCase().includes(query.toLowerCase())
    });
  }
  // Price filter
  priceFilter: number[] = [0, 1000];
  priceFilterOptions: Options = {
    floor: 1,
    ceil: 1000,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return "$ " + value;
        case LabelType.High:
          return "$ " + value;
        default:
          return "$ " + value;
      }
    }
  };
  handlePriceChange() {
    this.minPrice = this.priceFilter[0];
    this.maxPrice = this.priceFilter[1];

    if (this.maxPrice != 0 && this.minPrice != 0) {
      this.route.navigate(['/shop', this.minPrice, this.maxPrice]);
    }
  }
  // Price Filter
  public setPrice(minPrice: number, maxPrice: number) {
    this.minPrice = minPrice;
    this.maxPrice = maxPrice;
  }
  public getPrice() {
    return [this.minPrice, this.maxPrice]
  }
  public getShopByPrice(minPrice: number, maxPrice: number) {
    return this.shopblock = shop.filter((item: { price: (number) }) => {
      return item.price > minPrice && item.price <= maxPrice
    });
  }
  // Fetch All filter
  public setShops() {
    var shopByPrice = this.getPrice() != undefined ? this.getShopByPrice(this.getPrice()[0], this.getPrice()[1]) : '';
    var shopsByTags = this.getTag() != undefined ? this.getPostsByTags(this.getTag()) : '';
    var shopsByCategory = this.getCategory() != undefined ? this.getShopsByCategory(this.getCategory()) : '';
    var postsBySearch = this.getSearch() != undefined ? this.getPostsBySearch(this.getSearch()) : '';
    if ((shopByPrice != undefined && shopByPrice != []) && shopByPrice.length > 0) {
      this.shopblock = shopByPrice;
    } else if ((shopsByTags != '' || shopsByTags != undefined || shopsByTags != null) && shopsByTags.length > 0) {
      this.shopblock = shopsByTags;
    } else if ((shopsByCategory != '' || shopsByCategory != undefined || shopsByCategory != null) && shopsByCategory.length > 0) {
      this.shopblock = shopsByCategory;
    } else if ((postsBySearch != '' || postsBySearch != undefined || postsBySearch != null) && postsBySearch.length > 0) {
      this.shopblock = postsBySearch;
    } else {
      this.shopblock = shop;
    }
  }
  ngAfterContentInit(): void {
    this.setPrice(this.router.snapshot.params.minPrice, this.router.snapshot.params.maxPrice);
    this.setTag(this.router.snapshot.params.tagId);
    this.setCategory(this.router.snapshot.params.catId);
    this.setSearch(this.router.snapshot.params.query);
    this.setShops();
    this.setShop(this.router.snapshot.params.id);
  }
  // Shop Navigation
  public getDetailsNavigation(items: string | any[], index: number) {
    var output = [],
      id, item;
    if (items[index - 1] !== undefined && index - 1 !== -1) {
      item = items[index - 1];
      id = item.id;
      // Show the previous button 
      output.push("<li class='page-item'><a class='page-link' href='/shop-details/" + item.id + "'>Previous</a></li>");
    }
    if (items[index + 1] !== undefined && index <= items.length - 1) {
      // Show next button 
      item = items[index + 1];
      id = item.id;
      output.push("<li class='page-item'><a class='page-link' href='/shop-details/" + item.id + "'>Next</a></li>");
    }
    return output;
  }
  // Social Share
  public pageUrl = window.location.href;
  public socialShare(title: string) {
    var socialIcons = [
      {
        title: "facebook",
        iconClass: "fab fa-facebook-f",
        iconStyle: "fb",
        itemnumber: 500,
        link: "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(this.pageUrl) + ""
      },
      {
        title: "twitter",
        iconClass: "fab fa-twitter",
        iconStyle: "tw",
        itemnumber: 20,
        link: "http://twitter.com/intent/tweet?text=" + encodeURIComponent(title) + "&" + encodeURIComponent(this.pageUrl) + ""
      },
      {
        title: "linkedin",
        iconClass: "fab fa-linkedin-in",
        iconStyle: "fb",
        itemnumber: 46,
        link: "https://www.linkedin.com/shareArticle?mini=true&url=" + encodeURIComponent(this.pageUrl) + "&title=" + encodeURIComponent(title) + ""
      }
    ];
    return socialIcons;
  }
  openSocialPopup(social: any) {
    window.open(social.link, "MsgWindow", "width=600,height=600")
  }
  ngOnInit(): void {
    this.setCategoriesCount();
    this.setDemoDate();
  }
}
