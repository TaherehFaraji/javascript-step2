# project title
## description
## sub section


**bold**  
*italic*
<br>
***both***

- item1
- item2
  - item3

1. item1
2. item2
   1. item3

[link text](https://google.com "google")

![alt text](IMG_20260618_180008.jpg)

```javascript
function sum(a,b){
    return a+b;
}
sum(2,3);
```

> This is a note
>> nested note
---

# greet-cli ✨

![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)

A friendly command-line tool that greets you by name.

| Option     | Type    | Default | Description                     |
|------------|---------|---------|---------------------------------|
| `language` | string  | `'en'`  | Language code for the greeting |
| `uppercase`| boolean | `false` | Convert output to uppercase    |

<details>
<summary>📘 Click to expand detailed API documentation</summary>

### `getWeather(city, options)`

Fetches weather for a given city.

**Parameters:**
- `city` (string) – City name.
- `options` (object) – Optional configuration.

**Returns:** `Promise<WeatherData>`
</details>