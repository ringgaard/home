// Copyright 2022 Ringgaard Research ApS
// Licensed under the Apache License, Version 2

// Homepage components for ringgaard.com.

import {Component, stylesheet, html} from "/common/lib/component.js";

const cfg = {
  sitename: "Ringgaard Research",
  description: "Research and development of computer systems for knowledge " +
               "and language technologies.",

  address: "Ellebrinken 8",
  postal: "8520 Lystrup",
  country: "Denmark",
  phone: "+45 23295087",
  email: "contact@ringgaard.com",
  twitter: "mringgaard",
  qid: "Q105832622",

  company: "Ringgaard Research ApS",
  cvrno: "41641908",
  vatno: "DK41641908",
  bank: "Nykredit Bank",
  account: "5470-2674428",
  swift: "NYKBDKKK",
  iban: "DK4754700002674428",

  navbar: [
    {name: "Home", url: "/"},
    {name: "KnolCase", url: "/knolcase"},
    {name: "KnolBase", url: "/knolbase"},
    {name: "About", url: "/about"},
    {name: "Contact", url: "/contact"},
  ],

  quicklinks: [
    {name: "KnolCase", url: "/c/", icon: "&#xf187;"},
    {name: "KnolBase", url: "/kb/", icon: "&#xf1c0;"},
  ],

  menu: [
    {name: "About", url: "/about"},
    {name: "Privacy policy", url: "/privacy"},
    {name: "Contact", url: "/contact"},
  ],

  copyright: "Copyright 2021 Ringgaard Research ApS. All rights reserved.",
};

const contact = [
  {
    icon: "&#xf0e0;",
    text: cfg.email,
    url: `mailto:${cfg.email}`,
  },
  {
    icon: "&#xf095;",
    text: cfg.phone,
    url: `tel:${cfg.phone}`,
  },
  {
    icon: "&#xf099;",
    text: cfg.twitter,
    url: `https://twitter.com/${cfg.twitter}`,
  },
  {
    icon: "&#xf31a;",
    text: cfg.qid,
    url: `https://ringgaard.com/kb/${cfg.qid}`,
  },
];

const employees = [
{
  name: "Michael Ringgaard",
  photo: "michael.jpg",
  title: "Founder and CEO",

  social: [{
      icon: "&#xf0e0;",
      text: "michael@ringgaard.com",
      url: `mailto:michael@ringgaard.com`,
    },{
      icon: "&#xf095;",
      text: cfg.phone,
      url: `tel:${cfg.phone}`,
    },{
      icon: "&#xf099;",
      text: cfg.twitter,
      url: `https://twitter.com/${cfg.twitter}`,
    },{
      icon: "&#xf0e1;",
      text: "michael-ringgaard",
      url: `https://linkedin.com/in/michael-ringgaard-7831204/`,
    },{
      icon: "&#xf09b;",
      text: "ringgaard",
      url: "https://github.com/ringgaard/",
    },{
      icon: "&#xf31a;",
      text: "Q45320427",
      url: "https://ringgaard.com/kb/Q45320427",
  },
  ]
}
];

const social = [
  {icon: "&#xf09b;", url: "https://github.com/ringgaard/sling"},
  {icon: "&#xf099;", url: `https://twitter.com/${cfg.twitter}`},
  {icon: "&#xf0e0;", url: `mailto:${cfg.email}`},
];

function social_links() {
  let h = new Array();
  for (let site of social) {
    h.push(`<home-icon-link icon="${site.icon}" href="${site.url}">
            </home-icon-link>`);
  }
  return h.join("");
}

function quick_links() {
  let h = new Array();
  for (let item of cfg.quicklinks) {
    if (item.icon) {
      h.push(`<home-icon-link icon="${item.icon}" href="${item.url}">
              </home-icon-link>`);
    }
  }
  for (let site of social) {
  }
  return h.join("");
}

stylesheet(`
@font-face {
  font-family: "FontAwesome";
  font-style: normal;
  font-weight: 400;
  src: url('/home/font/forkawesome-webfont.woff2') format('woff2');
}

@font-face {
  font-family: 'Material Icons';
  font-style: normal;
  font-weight: 400;
  src: url(/home/font/material.woff2) format('woff2');
}

@font-face {
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 400;
  src: url('/home/font/raleway-normal.woff2') format('woff2');
}

html {
  height: 100%;
}

body {
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: 400;
  margin: 0px;
  line-height: 1.7;
}

pre {
  background: #ecf0f1;
  padding: 8px;
  font-size: 14px;
}

.cotm-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, 350px);
  justify-content: center;
}

`);

const logo = "\
M257.94,57.87c-16,22.9-37.86,45.41-62.54,60a60.83,60.83,0,0,0,7.66-29.64,61.\
23,61.23,0,0,0-61.25-61.06h0c-49.88,0-96.7,40.07-126,80.91-2.86-3.22-5.58-6.\
53-8.19-9.86S2.44,91.58,0,88.27C32.81,43.72,86,0,141.73,0,184.65,0,226.22,25\
.65,257.94,57.87Zm18,20.32c-2.62-3.33-5.33-6.64-8.19-9.86-29.33,40.84-76.16,\
80.91-126,80.91h0a61,61,0,0,1-53.59-90.7c-24.68,14.63-46.59,37.15-62.55,60,3\
1.73,32.22,73.3,57.89,116.21,57.88,55.79,0,108.93-43.73,141.73-88.28C281,84.\
88,278.52,81.53,275.91,78.19Zm-134.48-37a46.87,46.87,0,1,0,46.88,46.87A46.87\
,46.87,0,0,0,141.43,41.18Z";

export class HomeLogo extends Component {
  render() {
    return `
      <a href="/" tabindex="-1">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 283.46 176.46">
          <g><path d="${logo}"/></g>
        </svg>
      </a>`;
  }

  static stylesheet() {
    return `
      $ svg {
        width: 100%;
      }
      $ path {
        fill: #00A0D6; }
      }
    `;
  }
}

Component.register(HomeLogo);

export class HomeIcon extends Component {
  render() {
    return `${this.attrs.icon}`;
  }

  static stylesheet() {
    return `
      $ {
        font-family: "FontAwesome";
        display: flex;
        align-items: center;
        justify-content: center;
      }
    `;
  }
}

Component.register(HomeIcon);

export class HomeIconLink extends Component {
  render() {
    return `<a href="${this.attrs.href}">
              <home-icon icon="${this.attrs.icon}"></div>
            </a>`;
  }

  static stylesheet() {
    return `
      $ a {
        border-radius: 50%;
        height: 32px;
        width: 32px;
        background: #e0dfdf;
        user-select: none;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;
      }
      $ home-icon {
        color: white;
      }
      $ home-icon:hover {
        color: #656161;
      }
    `;
  }
}

Component.register(HomeIconLink);

export class HomeButton extends Component {
  render() {
    return `<a href="${this.attrs.href}">${this.attrs.label}</a>`;
  }

  static stylesheet() {
    return `
      $ a {
        display: inline-block;
        background: #00A0D6;
        color: #fff;
        border: 1px solid #00A0D6;
        font: inherit;
        font-weight: bold;
        padding: 7px 20px;
        margin: 7px;
        border-radius: 32px;
        cursor: pointer;
      }

      $ a:link {
        color: #fff;
      }

      $ a:visited {
        color: #fff;
      }

      $ a:hover {
        background: #fff;
        color: #00A0D6;
      }
    `;
  }
}

Component.register(HomeButton);

export class HomeRibbon extends Component {
  static stylesheet() {
    return `
      $ {
        display: block;
        background: #00a0d6 url(/home/image/ribbon.png) no-repeat;
        background-blend-mode: multiply;
        padding: 24px 7rem 24px 7rem;
        font: bold 40px Helvetica;
        color: white;
      }

      @media screen and (max-width: 767px) {
        $ {
          font: bold 24px Helvetica;
          background: #00a0d6;
          padding: 24px 1rem 24px 1rem;
        }
      }
    `;
  }
}

Component.register(HomeRibbon);

export class HomeSection extends Component {
  static stylesheet() {
    return `
      $ {
        display: block;
        margin-left: 7rem;
        margin-right: 7rem;
        color: #666666;
        font-size: 18px;
      }
      $ h2 {
        text-align: center;
        font-size: 2rem;
        color: #656161;
      }
      $ h3 {
        font-size: 1.5rem;
        color: #656161;
      }
      $ h4 {
        font-size: 1rem;
        color: #656161;
      }
      $ a {
        color: #00a0d6;
        text-decoration: none;
      }
      hr {
        margin: 2rem 0 2rem 0;
      }
      td {
        padding: 4px;
        vertical-align: top;
      }
      .picture-box {
        background-color: white;
        box-shadow: rgb(0 0 0 / 16%) 0px 4px 8px 0px,
                    rgb(0 0 0 / 23%) 0px 4px 8px 0px;
        padding: 10px;
      }

      @media screen and (max-width: 767px) {
        $ {
          margin-left: 1rem;
          margin-right: 1rem;
        }
      }
    }
    `;
  }
}

Component.register(HomeSection);

export class HomeFeatures extends Component {
  static stylesheet() {
    return `
      $ {
       display: flex;
       align-items: center;
      }

      @media screen and (max-width: 767px) {
        $  {
          flex-wrap: wrap;
        }
      }
    `;
  }
}

Component.register(HomeFeatures);

export class HomeFeature extends Component {
  static stylesheet() {
    return `
      $ {
        padding-right: 1rem;
        flex-grow: 1;
        flex-basis: 0;
        min-width: 300px;
        background-color: #ffffff;
      }
      $ home-icon {
        font-size: 4.5rem;
      }
      $ h3 {
        font-family: Raleway, Helvetica, Arial, sans-serif;
        font-size: 32px;
        font-weight: normal;
      }
      $ h4 {
        text-align: center;
      }
      $ p {
        font-family: Raleway, Helvetica, Arial, sans-serif;
        font-size: 20px;
        line-height: 32px;
      }
      button {
        margin-right: 18px;
        margin-bottom: 18px;
      }
    `;
  }
}

Component.register(HomeFeature);

export class HomeBanner extends Component {
  render() {
    return `
      <home-logo></home-logo>
      <div class="title">${cfg.sitename}</div>
      <div class="quicklinks">${quick_links()}</div>
    `;
  }

  static stylesheet() {
    return `
      $ {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-left: 7rem;
        margin-right: 7rem;
        border-bottom: 1px solid #eaeaea;
      }

      $ home-logo {
        margin: 5px 10px 0px 0px;
        outline: none;
      }

      $ home-logo svg {
        width: 50px;
      }

      $ .title {
        font-family: "Helvetica", "sans";
        font-weight: bold;
        font-size: 1rem;
        letter-spacing: -1px;
        line-height: 1;
        color: #656161;
        margin: 16px 0px 16px 0px;
      }

      $ .quicklinks {
        display: flex;
        margin-left: auto;
      }

      $ home-icon-link {
        padding: 8px 0px 8px 8px;
      }

      @media screen and (max-width: 767px) {
        $ {
          margin-left: 1rem;
          margin-right: 1rem;
        }
      }
    `;
  }
}

Component.register(HomeBanner);

export class HomeNavbar extends Component {
  render() {
    let h = new Array();
    for (let item of cfg.navbar) {
      h.push(`<a href="${item.url}">${item.name}</a>`);
    }
    return h.join("");
  }

  static stylesheet() {
    return `
      $ {
        display: block;
        font: bold 1rem "Helvetica", "sans";
        margin-left: 7rem;
        margin-right: 7rem;
        padding-top: 20px;
        padding-bottom: 20px;
      }
      $ a {
        display: inline-block;
        padding: 0.3rem 1.6rem 0.3rem 0rem;
        color: #656161;
        text-decoration: none;
      }
      $ a:hover {
        color: #00a0d6;
      }

      @media (hover: none) {
        $ {
          display: none;
        }
      }
    `;
  }
}

Component.register(HomeNavbar);

export class HomeAddressInfo extends Component {
  render() {
    return `
      <div>${cfg.address}</div>
      <div>${cfg.postal}</div>
      <div>${cfg.country}</div>
    `;
  }
}

Component.register(HomeAddressInfo);

export class HomeContactInfo extends Component {
  render() {
    let h = new Array();
    for (let c of contact) {
      h.push(`
        <div>
          <a href="${c.url}">
            <home-icon icon="${c.icon}"></home-icon>${c.text}
          </a>
        </div>
      `);
    }
    return h.join("");
  }

  static stylesheet() {
    return `
      $ {
        white-space: nowrap;
      }
      $ home-icon {
        display: inline;
        padding-right: 4px;
        font-size: 1rem;
      }
      $ a {
        color: inherit;
        text-decoration: none;
      }
    `;
  }
}

Component.register(HomeContactInfo);

export class HomeCompanyInfo extends Component {
  render() {
    let h = new Array();
    h.push(`
      <div>${cfg.company}</div>
      <div>CVR: ${cfg.cvrno}</div>
      <div>Bank: ${cfg.bank}</div>
      <div>Bank account: ${cfg.account}</div>
    `);
    if (this.attrs.detailed) {
      h.push(`
        <div>EU VAT#: ${cfg.vatno}</div>
        <div>SWIFT: ${cfg.swift}</div>
        <div>IBAN: ${cfg.iban}</div>
      `);
    }
    return h.join("");
  }
}

Component.register(HomeCompanyInfo);

export class HomePeople extends Component {
  render() {
    let h = new Array();
    for (let e of employees) {
      h.push('<div class="person">');
      h.push(`<img src="/home/image/${e.photo}" width="200">`);
      h.push('<div class="info">');
      h.push(`<div class="name">${e.name}</div>`);
      h.push(`<div class="title">${e.title}</div>`);
      for (let s of e.social) {
        h.push(`
          <div>
            <a href="${s.url}">
              <home-icon icon="${s.icon}"></home-icon> ${s.text}
            </a>
          </div>
        `);
      }
      h.push('</div>');

      h.push('</div>');
    }
    return h.join("");
  }

  static stylesheet() {
    return `
      $ {
        display: grid;
      }
      $ .person {
        display: flex;
        flex-direction: row;
        gap: 16px;
      }
      $ .info {
        font-size: 12px;
        line-height: 1.2;
      }
      $ .name {
        font-size: 24px;
        font-weight: bold;
      }
      $ home-icon {
        display: inline;
        padding-right: 4px;
        font-size: 1rem;
      }
      $ a {
        color: inherit;
        text-decoration: none;
      }
    `;
  }
}

Component.register(HomePeople);

export class HomeBottom extends Component {
  render() {
    return `
        <div class="row">
          <grid class="column">
            <home-logo class="logo"></home-logo>
            <div class="site">${cfg.sitename}</div>
            <div class="description">${cfg.description}</div>
            <div class="social">${social_links()}</div>
          </grid>
          <div class="column">
            <div class="title">CONTACT</div>
            <home-address-info></home-address-info>
            <home-contact-info></home-contact-info>
          </div>
          <div class="column">
            <div class="title">QUICK LINKS</div>
            <div class="quicklinks">${this.quicklinks()}</div>
          </div>
          <div class="column">
            <div class="title">COMPANY</div>
            <home-company-info></home-company-info>
          </div>
        </div>
        <hr>
        <div class="row">
          <div class="copyright">${cfg.copyright}</div>
          <div class="menu">${this.menu()}</div>
        </div>
    `;
  }

  menu() {
    let h = new Array();
    for (let item of cfg.menu) {
      h.push(`<a href="${item.url}">${item.name}</a>`);
    }
    return h.join("/");
  }

  quicklinks() {
    let h = new Array();
    h.push("<ul>");
    for (let item of cfg.quicklinks) {
      h.push(`<li><a href="${item.url}">${item.name}</a></li>`);
    }
    h.push("</ul>");
    return h.join("");
  }

  static stylesheet() {
    return `
      $ {
        display: block;
        font-size: 0.9rem;
        background: #2e4656;
        color: #ebebeb;
        width: 100%;
        margin-top: 3rem;
      }

      $ .row {
        display: flex;
        padding: 2rem 7rem 2rem 7rem;
        justify-content: space-evenly;
      }

      $ .column {
        padding-right: 2rem;
      }

      $ hr {
        margin: 0rem 7rem;
        border-color: rgba(154, 152, 152, 0.5);
      }

      $ .site {
        display: inline;
        font-family: "Helvetica", "sans";
        font-weight: bold;
        font-size: 2.5rem;
        line-height: 1;
        color: white;
        padding-bottom: 10px;
      }

      $ .logo {
        margin: 5px 10px 0px 0px;
        outline: none;
        float: left;
      }
      $ .logo svg {
        width: 100px;
      }
      $ .logo path {
        fill: #FFFFFF;
      }

      $ .social {
        display: flex;
        margin-left: auto;
        margin-top: 10px;
      }

      $ home-icon-link {
        padding: 8px 0px 8px 8px;
      }

      $ home-icon-link a {
        background: white;
      }

      $ home-icon-link a:hover {
        background: #e0dfdf;
      }

      $ home-icon-link home-icon {
        color: black;
      }

      $ .title {
        font-family: "Helvetica";
        font-size: 20px;
        font-weight: bold;
        color: white;
        padding: 10px 10px 10px 0px;
      }

      $ .quicklinks ul {
        list-style-type: "›";
        margin: 0px;
        padding: 0px;
      }

      $ .quicklinks a {
        color: inherit;
        text-decoration: none;
        user-select: none;
        margin-left: 10px;
        margin-right: 10px;
      }

      $ .copyright {
        display: inline;
        font-weight: bold;
      }

      $ .menu {
        display: flex;
        font-weight: bold;
        margin-left: auto;

        cursor: pointer;
      }

      $ .menu a {
        color: inherit;
        text-decoration: none;
        user-select: none;
        margin-left: 10px;
        margin-right: 10px;
      }

      @media screen and (max-width: 767px) {
        $ .row {
          padding: 1rem 1rem 1rem 1rem;
          justify-content: initial;
          flex-wrap: wrap;
        }
        $ hr {
          margin: 0rem 1rem;
        }
    `;
  }
}

Component.register(HomeBottom);

export class HomeHeader extends Component {
  render() {
    return `
      <home-banner></home-banner>
      <home-navbar></home-navbar>
    `;
  }
}

Component.register(HomeHeader);

export class HomeFooter extends Component {
  render() {
    return `
      <home-bottom></home-bottom>
    `;
  }
}

Component.register(HomeFooter);

export class HomeFeedback extends Component {
  onconnected() {
    this.bind("#submit", "click", e => this.onsubmit(e));
  }

  status(msg) {
    this.find("#status").innerHTML = msg;
  }

  async onsubmit(e) {
    let name = this.find("#name").value.trim();
    let email = this.find("#email").value.trim();
    let message = this.find("#message").value.trim();
    if (!name) {
      this.status("Name is missing");
    } else if (!email) {
      this.status("E-mail address is missing");
    } else if (!message) {
      this.status("Message is missing");
    } else {
      let n = Component.escape(name);
      let e = Component.escape(email);
      let r = await fetch(`/home/feedback?sender=${e}&name=${n}`, {
        method: "POST",
        body: message,
      });
      if (r.ok) {
        this.status("Message has been sent");
      } else {
        this.status("Error sending message");
      }
    }
  }


  static stylesheet() {
    return `
      $ {
        display: flex;
        flex-direction: column;
        font-size: 1rem;
        color: #656161;
        gap: 10px;
        flex: 1;
        min-width: 300px;
      }
      $ label {
        font-weight: bold;
      }
      $ input {
        border: 0 none;
        background: rgba(154, 152, 152, 0.2);
        box-shadow: none;
        width: 50%;
        line-height: 2rem;
        padding: 0.425rem 0.425rem;
        font: inherit;
        outline: 0;
      }
      $ textarea {
        border: 0 none;
        background: rgba(154, 152, 152, 0.2);
        box-shadow: none;
        width: 80%;
        min-width: 80%;
        min-height: 25rem;
        resize: vertical;
        line-height: 2rem;
        padding: 0.425rem 0.425rem;
        font: inherit;
        outline: 0;
      }
    `;
  }
}

Component.register(HomeFeedback);

export class HomeCotm extends Component {
  render() {
    let p = this.attrs;
    return `
      <div class="time">${p.time}</div>
      <div class="picture">
        <a href="/c/${p.case}" target="_blank">
          <img src="https://ringgaard.com/thumb/${p.image}">
        </a>
      </div>
      <div class="descr">
        <div class="case">
          Case #${p.case}
          <a class="topics" href="https://ringgaard.com/kb/PCASE/${p.case}">Topics</a>
        </div>
        <div class="title">
          <a href="https://ringgaard.com/c/${p.case}" target="_blank">${p.title}</a>
        </div>
        <div class="subtitle">${p.description}</div>
      </div>
    `;
  }

  static stylesheet() {
    return `
      $ {
        display: flex;
        flex-direction: column;
        box-shadow: rgba(0, 0, 0, 0.16) 0px 2px 4px 0px,
                    rgba(0, 0, 0, 0.23) 0px 2px 4px 0px;
        margin: 16px;
        padding: 10px;
        border: 1px solid #eeeeee;
        background-color: #ffffff;
        overflow: hidden;
      }
      $ a {
        text-decoration: none;
      }
      $ a.topics {
        float: right;
        color: black;
        background-color: #eeeeee;
        padding: 4px;
        border-radius: 8px;
      }
      $ img {
        height: 200px;
        max-width: 300px;
      }
      $ .picture {
        width: 150px;
        margin: 5px;
      }
      $ .descr {
        margin: 5px;
      }
      $ .time {
        font-size: 18px;
        font-weight: bold;
      }
      $ .case {
        font-size: 12px;
      }
      $ .title {
        font-size: 18px;
      }
      $ .subtitle {
        font-size: 16px;
        font-style: italic;
      }
    `;
  }
}

Component.register(HomeCotm);

export class KbTopic extends Component {
  render() {
    let qid = this.attrs.qid;
    let title = this.attrs.title || qid;
    return `<a href="https://ringgaard.com/kb/${qid}">${title}</a>`;
  }
}

Component.register(KbTopic);

export class HIcon extends Component {
  static stylesheet() {
    return `
      $ {
        font-family: 'Material Icons';
        font-weight: normal;
        font-style: normal;
        font-size: 24px;
        line-height: 1;
        letter-spacing: normal;
        text-transform: none;
        display: inline-block;
        white-space: nowrap;
        word-wrap: normal;
        direction: ltr;
        -webkit-font-feature-settings: 'liga';
        -webkit-font-smoothing: antialiased;
        user-select: none;

        font-size: 1.2rem;
        vertical-align: middle;
      }
    `;
  }
}

Component.register(HIcon);

var birthdays;

export class BirthdayList extends Component {
  async oninit() {
    if (!birthdays) {
      let r = await fetch("/home/birthdays");
      if (r.ok) birthdays = await r.json();
    }
    this.update(birthdays);
  }

  render() {
    if (!this.state) return;
    let h = new Array();
    for (let b of this.state.birthdays) h.push(new BirthdayCard(b));
    return h;
  }

  static stylesheet() {
    return `
      $ {
        display: grid;
        grid-template-columns: repeat(auto-fit, 350px);
        justify-content: center;
      }
    `;
  }
}

Component.register(BirthdayList);

export class BirthdayCard extends Component {
  render() {
    let p = this.state;
    let h = '';
    let kburl = "/kb/" + p.id;
    h += `<a class="name" href="${kburl}">${p.name}, ${p.age}</a>`;
    if (p.picture) {
      let url = Component.escape(p.picture);
      h += `<a  class="picture" href="${kburl}">`;
      h += `<img src="https://ringgaard.com/thumb/${url}">`;
      h += '</a>';
    }
    h += '<p class="desc">';
    if (p.description) {
      h += p.description;
    } else if (!p.description.includes("born")) {
      h += `, born ${p.birthdate}`;
    }
    h += '</p>';

    return h;
  }

  static stylesheet() {
    return `
      $ {
        display: flex;
        flex-direction: column;
        box-shadow: rgba(0, 0, 0, 0.16) 0px 2px 4px 0px,
                    rgba(0, 0, 0, 0.23) 0px 2px 4px 0px;
        margin: 16px;
        padding: 10px;
        border: 1px solid #eeeeee;
        background-color: #ffffff;
      }
      $ a {
        text-decoration: none;
        color: inherit;
      }
      $ .name {
        font-size: 18px;
        font-weight: bold;
      }
      $ img {
        height: 200px;
        max-width: 300px;
        margin: auto;
      }
      $ .picture {
        width: 300px;
        display: flex;
      }
      $ .desc {
        font-size: 16px;
      }
    `;
  }
}

Component.register(BirthdayCard);

export class TopicResult extends Component {
  onconnected() {
    this.attach(this.onclick, "click");
  }

  onclick(e) {
    console.log("navigate to", this.state.id);
    location.href = "/kb/" + this.state.id;
  }

  render() {
    let t = this.state;
    let h = `<div class="name">${t.name}${t.age ? ", " + t.age : ""}</div>`;
    if (t.description) {
      h += `<div class="desc">${t.description}</div>`;
    } else if (t.birthday) {
      h += `<div class="desc">born ${t.birthday}</div>`;
    }
    return h;
  }

  static stylesheet() {
    return `
      $ {
        display: block;
        padding: 4px;
        cursor: pointer;
        line-height: 1;
      }
      $ .name {
        font-size: 16px;
        font-weight: bold;
      }
      $ .desc {
        font-size: 14px;
      }
      $:hover {
        background-color: #F0F0F0;
      }
    `;
  }
}

Component.register(TopicResult);

export class TopicList extends Component {
  visible() { return this.state; }

  render() {
    let h = new Array();
    for (let t of this.state) {
      h.push(new TopicResult(t));
    }
    return h;
  }

  static stylesheet() {
    return `
      $ {
        display: block;
        height: 250px;
        overflow-x: hidden;
        overflow-y: scroll;
      }

      $::-webkit-scrollbar {
        background-color: #F0F0F0;
        width: 8px;
        height: 8px;
      }

      $::-webkit-scrollbar-corner {
        background-color: #0E0E0E;
      }

      $::-webkit-scrollbar-thumb {
        background-color: #A0A0A0;
        border-radius: 4px;
      }

      $::-webkit-scrollbar-thumb:hover {
        background-color: #B0B0B0;
      }
    `;
  }
}

Component.register(TopicList);

export class TodaysBirthdays extends Component {
  async oninit() {
    if (!birthdays) {
      let r = await fetch("/home/birthdays", {cache: "reload"});
      if (r.ok) birthdays = await r.json();
    }
    this.update(birthdays.birthdays);
  }

  render() {
    return html`
      <div><b><a href="/birthdays">Today's birthdays</a></b></div>`,
      ${new TopicList(this.state)}
    `;
  }

  static stylesheet() {
    return `
      $ {
        box-shadow: rgba(0, 0, 0, 0.16) 0px 2px 4px 0px,
                    rgba(0, 0, 0, 0.23) 0px 2px 4px 0px;
        margin: 16px;
        padding: 10px;
        border: 1px solid #eeeeee;
        max-width: 350px;
      }
    `;
  }
}

Component.register(TodaysBirthdays);

// Defer displaying page until all components have been loaded.
document.body.style.display = "";
