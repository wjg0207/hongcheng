import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/Home.vue'
import Product from '../views/Product/Product.vue'
import ProductLiquid from '../views/Product/ProductLiquid.vue'
import ProductControl from '../views/Product/ProductControl.vue'
import News from '../views/News/News.vue'
import CompanyNews from '../views/News/CompanyNews.vue'
import TradeNews from '../views/News/TradeNews.vue'
import NewAffiche from '../views/News/NewAffiche.vue'
import Solution from '../views/Solution/Solution.vue'
import SolutionCommunity from '../views/Solution/SolutionCommunity.vue'
import SolutionBusiness from '../views/Solution/SolutionBusiness.vue'
import Sucessful from '../views/Sucessful/Sucessful.vue'
import CaseSplit from '../views/Sucessful/CaseSplit.vue'
import CaseShow from '../views/Sucessful/CaseShow.vue'
import Contact from '../views/Contact/Contact.vue'
import ContactWay from '../views/Contact/ContactWay.vue'
import ContactLine from '../views/Contact/ContactLine.vue'
import About from '../views/About/About.vue'
import AboutCompany from '../views/About/AboutCompany.vue'
import AboutCulture from '../views/About/AboutCulture.vue'
import AboutOrganize from '../views/About/AboutOrganize.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    children: [{
      path: "/about",
      component: AboutCompany
    }, {
      path: "/about/aboutcompany",
      component: AboutCompany
    }, {
      path: "/about/aboutculture",
      component: AboutCulture
    }, {
      path: "/about/aboutorganize",
      component: AboutOrganize
    }]
  },
  {
    path: '/product',
    name: 'Product',
    component: Product,
    children: [{
      path: "/product",
      component: ProductControl,
    }, {
      path: "/product/productliquid",
      component: ProductLiquid,
    }, {
      path: "/product/productcontrol",
      component: ProductControl
    }]
  },
  {
    path: '/news',
    name: 'News',
    component: News,
    children: [{
      path: "/news",
      component: CompanyNews,
    }, {
      path: "/news/companynews",
      component: CompanyNews,
    }, {
      path: "/news/tradenews",
      component: TradeNews
    }, {
      path: "/news/newaffiche",
      component: NewAffiche
    }]
  },
  {
    path: '/solution',
    name: 'Solution',
    component: Solution,
    children: [{
      path: "/solution",
      component: SolutionCommunity,
    }, {
      path: "/solution/solutioncommunity",
      component: SolutionCommunity,
    }, {
      path: "/solution/solutionbusiness",
      component: SolutionBusiness
    }]
  },
  {
    path: '/sucessful',
    name: 'Sucessful',
    component: Sucessful,
    children: [{
      path: "/sucessful",
      component: CaseSplit,
    }, {
      path: "/sucessful/casesplit",
      component: CaseSplit,
    }, {
      path: "/sucessful/caseshow",
      component: CaseShow
    }]
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
    children: [{
      path: "/contact",
      component: ContactWay,
    }, {
      path: "/contact/contactway",
      component: ContactWay,
    }, {
      path: "/contact/contactline",
      component: ContactLine
    }]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router