# js-var-dumper
The same php var_dump() in JavaScript

[![Version npm](https://img.shields.io/npm/v/js-var-dumper.svg)](https://www.npmjs.com/package/js-var-dumper)

# Getting Started

## Installation with nodejs

```bash
npm install js-var-dumper
```

## Usage

```javascript
import dump from "js-var-dumper";
```

```javascript
const test1 = "John Doe";
const test2 = 24;
const test3 = [3,2,1,"Jane"];
// Some tests here

dump(test1);
dump(test2);
dump(test3);
```

## Installation with ES6

```html
<script src="https://cdn.jsdelivr.net/npm/js-var-dumper@1.0.5/dump/min.dump.js"></script>
```

### Example 
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="https://cdn.jsdelivr.net/npm/js-var-dumper@1.0.5/dump/min.dump.js"></script>
  <title>js-var-dumper</title>
</head>
<body>
	<h1>Js Var Dumper</h1>
	<script>
    const test1 = "John Doe";
    const test2 = 24;
    const test3 = [3,2,1,"Jane"];
    // Some tests here
    
    dump(test1);
    dump(test2);
    dump(test3);
	</script>
</body>
</html>
```