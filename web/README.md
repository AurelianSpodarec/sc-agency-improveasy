
Draft
# Working with SCSS

## Media Queries 

Media queries breakpoints are defined in 'variables/breakpoints'.

You can use them as:


```
@include breakpoint(medium down) {

}
```

Which would be equivalant to:
@media max-min($medium) {

}

```
 @include breakpoint(xlarge down) {
    margin-bottom: 1em;
}
```