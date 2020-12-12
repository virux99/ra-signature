# ra-signature

ra-signature is a library work use to add a customized signature pad in your angular app  

## Installation

Use the package manager ### npm to install ra-signature.

```bash
npm i ra-signature
```

## Usage
in your app module
```typescript
import {RaSignatureModule} from 'ra-signature';
```


and in your component.html add
```html
<ra-signature [height]="200" [width]="200" [strokeColor]="'#f3f3f3'" (imageEvent)="receiveImage($event)" ></ra-signature>

```

and in your component.ts add
```typescript
image:string="";
receiveImage($event) {
    this.image = $event
  }
```
 [link to npm package](https://www.npmjs.com/package/ra-signature)
