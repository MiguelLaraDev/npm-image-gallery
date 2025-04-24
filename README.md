# M Lara Dev Image Gallery NPM Package.

A lightweight, customizable image gallery package built with **Vanilla JS** + **TypeScript**.  

This project was created to review and practice my skills on Vanilla JS.


![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)  
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)  
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)  
![Rollup](https://img.shields.io/badge/Rollup-EC4A3F?style=for-the-badge&logo=rollup.js&logoColor=white)  
![npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)  


## Goals: 
    - Create a simple image gallery which can be installed from NPM.
    - Use Typescript and Vanilla JS, no other dependencies.
    - Offer some customization as colors, but don't go deep: Keep it simple.
    - Focus on make the code readable, easy to understand and use modern JS.
    - Include a demo.


## Installation

NPM link: https://www.npmjs.com/package/mlaradev-image-gallery

```bash
npm install mlaradev-image-gallery
```

## Basic usage:
```bash
import MlaradevImageGallery from "mlaradev-image-gallery";

new MlaradevImageGallery("#my-container", items, options);
```

## Configuration:
### Options example:
```bash
{
  "thumbs": {
    "borderColor": "red",
    "borderWidth": "2px",
    "width": 80,
    "height": 80,
    "useBorder": true
  },
  "slider": {
    "mainColor": "red"
  }
}
```

### Items list example:
```bash
[
  {
    "id": "pic-1",
    "alt": "Example pic",
    "sizes": {
      "thumbnail": "https://example.com/thumb/thumb110x110/pics/prod/428224.webp",
      "large": "https://example.com/large/padthumb600x600/pics/bdb/_42/428224/17105803_800.jpg"
    }
  },
  {
    "id": "pic-2",
    "alt": "Example pic",
    "sizes": {
      "thumbnail": "https://example.com/thumb/thumb110x110/pics/bdb/_42/428224/17111548_800.jpg",
      "large": "https://example.com/large/padthumb600x600/pics/bdb/_42/428224/17111548_800.jpg"
    }
  },
]
```