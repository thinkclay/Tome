
# Data Types


## Common Data Types

>  | Type       | Description                                  | Example                 |
>  |------------|----------------------------------------------|-------------------------|
>  | bool       | Logic values                                 | `true`, `false`         |
>  | string     | Text such as                                 | `"this is a string"`    |         
>  | int        | Whole number                                 | `-2`, `5`, `7`, `9`     |
>  | float      | Decimal number                               | `-5.72`, `3.99`, `12.1` |
>  | complex    | Complex number                               | `a + bi`, `100+8i`      |


> ```go
> var decimal float32
> var morePreciseDecimal float32
> ```

At the core of all programs is data. What else is a program to do if it's not manipulating data of some kind? Most programming languages implement a common core set of data types. Thay may have variations or additional types defined as well, but in general all data can be represented by:

- booleans - _represent a true or false state_
- strings - _are used for text values_
- integers - _which represent whole numbers_
- floats - _represent decimal point numbers_
- complex - _represent complex numbers_

In Go you will commonly work with these four standard data types. Therefore, if you have only one takeaway from this section, let it be a complete familiarity of these data types and how they are represented in Go. Outside of complex math, science, or file operations, you may never find yourself needing to work with other data types.




## Additional Number Types

> | Type       | Description                                            |
> |------------|--------------------------------------------------------|
> | float64    | Decimal number with double the precision of float32    |

> | Type       | Description                                            |
> |------------|--------------------------------------------------------|
> | int        | Signed integers can be 8, 16, 32 and 64 bit            |
> | uint       | Unsigned integers can be 8, 16, 32 and 64 bit          |
> | uintptr    | An unsigned integer large enough to hold a pointer     |
> | byte       | Alias for uint8 used to represent a byte value         |
> | rune       | Alias for int32 used to represent a character value    |
> | complex    | Complex numbers can be 64 and 128 bit                  |

The following types all represent numeric data, but with various limits and ranges. Go has broken these out so that further optimizations can be made when needed. For example, `uint8` is commonly used in many libraries such as digital color display. Colors in many programs are represented with a combination of Red/Green/Blue values. These colors have been traditionally defined with a range of 0 (black) to 255 (white). Thus when dealing with colors you will find better performance by specifying them with `uint8` instead of an `int` type. Go also has convenient `uint` and `uintptr` types, which represents an unsigned integer with a variable minimum preallocated size. This makes it an easy type to use if you're not sure how large your integers will be.
