// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category);

// Categories have many Products
Category.hasMany(Product);

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: {
      model: ProductTag,
      unique: false
  },
  as: 'tags'
});
Product.hasMany(ProductTag);
ProductTag.belongsTo(Product);

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: {
      model: ProductTag,
      unique: false
  },
  as: 'products'
});

Tag.hasMany(ProductTag);
ProductTag.belongsTo(Tag);


module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
