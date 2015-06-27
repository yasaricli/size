# Size
Generate a human readable String describing the file size.

## Examples

```javascript
filesize(500);                        // "500 B"
filesize(500, {bits: true});          // "4 kb"
filesize(265318, {base: 10});         // "265.32 kB"
filesize(265318);                     // "259.1 kB"
filesize(265318, {round: 0});         // "259 kB"
filesize(265318, {output: "array"});  // [259.1, "kB"]
filesize(265318, {output: "object"}); // {value: 259.1, suffix: "kB"}
filesize(1, {suffixes: {B: "Б"}});    // "1 Б"
filesize(1024);                       // "1 kB"
filesize(1024, {exponent: 0});        // "1024 B"
filesize(1024, {output: "exponent"}); // 1
```
