### Take picture from google map

```
const canvas = document.getElementsByClassName('MyME0d widget-scene-canvas')[0] // [0].toDataURL()

canvas.toBlob(function(blob) {
    const newImg = document.createElement('img'),
    url = URL.createObjectURL(blob);
    console.log(url)
});
```
