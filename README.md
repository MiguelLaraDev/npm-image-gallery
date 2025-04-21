# M Lara Dev Image Gallery NPM Package.

[![npm version](https://img.shields.io/npm/v/mlaradev-image-gallery.svg?style=flat-square)](https://www.npmjs.com/package/mlaradev-image-gallery)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)


This project was created to review and practice my skills on Vanilla JS.

A lightweight, dependency-free vanilla JavaScript image gallery with TypeScript support.

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
```bach
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