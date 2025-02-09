# taks-stylelint-order

Comprehensive CSS properties ordering configuration for stylelint-order.

## Installation

```bash
npm install --save-dev taks-stylelint-order stylelint stylelint-order
```

## Usage

Add this config to your stylelint configuration:

```js
{
  "plugins": ["stylelint-order"],
  "extends": ["taks-stylelint-order"]
}
```

## Properties Order

The properties are ordered in the following categories:

1. Cascading and Inheritance
2. Generated Content
3. Positioned Layout
4. Anchor Positioning
5. Containment Module
6. Display
7. Grid Layout
8. Flexible Box
9. Reading Flow
10. Box Alignment Module
    ... (and more)

For the complete order, please check the [index.js](./index.js) file.

## Requirements

- Node.js 14+
- stylelint 14+
- stylelint-order 6+

## License

MIT © TAK
