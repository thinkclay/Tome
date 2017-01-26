
# Data Types

At the core of all programs is data. What else is a program to do if it's not manipulating data of some kind? Most programming languages implement a common core set of data types. Thay may have variations or additional types defined as well, but in general all data can be represented by:

- booleans - _represent a true or false state_
- strings - _are used for text values_
- floats - _represent decimal point numbers_
- integers - _which represent whole numbers_

In Go you will commonly work with these four standard data types. Therefore, if you have only one takeaway from this section, let it be a complete familiarity of these data types and how they are represented in Go.

## Common Data Types

| Type       | Description                                  | Example                 |
|------------|----------------------------------------------|-------------------------|
| bool       | Logic values                                 | `true`, `false`         |
| string     | Text such as                                 | `"this is string text"` |         
| int        | Whole number                                 | `-2`, `5`, `7`, `9`     |
| float32    | Decimal number                               | `-5.72`, `3.99`, `12.1` |


## Additional Number Types

The following types all represent numeric data, but with various limits and ranges. Go has broken these out so that further optimizations can be made when needed. For example, `uint8` is commonly used in many libraries such as digital color display. Colors in many programs are represented with a combination of Red/Green/Blue values. These colors have been traditionally defined with a range of 0 (black) to 255 (white). Thus when dealing with colors you will find better performance by specifying them with `uint8` instead of the default `int` type.

| Type       | Description                                  | Example                 |
|------------|----------------------------------------------|-------------------------|
| float64    |                                                 |

| uint       |                                                 |
| uint8      | `0` to `255`                                    |
| uint16     | `0` to `65535`                                  |
| uint32     | `0` to `4294967295`                             |
| uint64     | `0` to `18446744073709551615`                   |

| int8       | `-128` to `127`                                 |
| int16      | `-32768` to `32767`                             |
| int32      | `-2147483648` to `2147483647`                   |
| int64      | `-9223372036854775808` to `9223372036854775807` |

| uintptr    | `0` to `4294967295`                             |
| byte       | `-128` to `127`                                 |
| rune       | `0` to `4294967295`                             |
| complex64  |                                                 |
| complex128 |                                                 |
