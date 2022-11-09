const users = require('../modules/users/models/usersModel');
const roles = require('../modules/roles/models/rolesModel');
const userRoles=require('../modules/user-roles/models/userRolesModel');
const brand = require('../modules/brands/models/brandsModel');
const category=require('../modules/categories/models/categoriesModel');
const product = require('../modules/products/models/productsModel');
const bag =  require('../modules/bags/models/bagsModel');
const address = require('../modules/addresses/models/addressesModel');
const bagItem = require('../modules/bag-items/models/bagItemsModel');
const order = require('../modules/orders/models/ordersModel');
const orderItem = require('../modules/order-items/models/orderItemsModel');
const section = require('../modules/sections/models/sectionsModel');
const sectionCategories = require('../modules/section-categories/models/sectionCategoriesModel');
const rating = require("../modules/ratings/models/ratingsModel");
const review = require("../modules/reviews/models/reviewsModel");
const sale  = require('../modules/sales/models/salesModel');
const sale_item = require("../modules/sale-items/models/saleItemsModel");
const wishlist  = require('../modules/wishlists/models/wishlistsModel');
const WishlistItem = require('../modules/wishlist-items/models/wishlistItemsModel');
const customer_support = require('../modules/customer-supports/models/customerSupportsModel');
const order_return = require("../modules/order-returns/models/orderReturnsModel");
const notification = require('../modules/notifications/models/notificationsModel');

users.belongsToMany(roles,{through:userRoles,foreignKey:'user_id'});
roles.belongsToMany(users,{through:userRoles,foreignKey:'role_id'});

category.hasMany(product,{foreignKey:'category_id'});
product.belongsTo(category,{foreignKey:'category_id'});

brand.hasMany(product,{foreignKey:"brand_id"});
product.belongsTo(brand,{foreignKey:"brand_id"});

users.hasMany(address,{foreignKey:"user_id"});
address.belongsTo(users,{foreignKey:"user_id"});

users.hasOne(bag,{foreignKey:"user_id"});
bag.belongsTo(users,{foreignKey:"user_id"});

bag.hasMany(bagItem,{foreignKey:"bag_id"});
bagItem.belongsTo(bag,{foreignKey:"bag_id"});

product.hasOne(bagItem,{foreignKey:"product_id"});
bagItem.belongsTo(product,{foreignKey:"product_id"});

order.hasMany(orderItem,{foreignKey:"order_id"});
orderItem.belongsTo(order,{foreignKey:"order_id"});

product.hasOne(orderItem,{foreignKey:"product_id"});
orderItem.belongsTo(product,{foreignKey:"product_id"});

users.hasOne(order,{foreignKey:"user_id"});
order.belongsTo(users,{foreignKey:"user_id"});

section.belongsToMany(category,{through:sectionCategories,foreignKey:"section_id"});
category.belongsToMany(section,{through:sectionCategories,foreignKey:"category_id"});   

product.hasMany(review,{foreignKey:"product_id"});
review.belongsTo(product,{foreignKey:"product_id"});

product.hasMany(rating,{foreignKey:"product_id"});
rating.belongsTo(product,{foreignKey:"product_id"});

users.hasMany(rating,{foreignKey:"user_id"});
rating.belongsTo(users,{foreignKey:"user_id"});

users.hasMany(review,{foreignKey:"user_id"});
review.belongsTo(users,{foreignKey:"user_id"});

sale.hasMany(sale_item,{foreignKey:"sale_id"});
sale_item.belongsTo(sale,{foreignKey:"sale_id"});

product.hasMany(sale_item,{foreignKey:"product_id"});
sale_item.belongsTo(product,{foreignKey:"product_id"});

users.hasMany(customer_support,{foreignKey:"user_id"});
customer_support.belongsTo(users,{foreignKey:"user_id"});

users.hasOne(wishlist,{foreignKey:"user_id"});
wishlist.belongsTo(users,{foreignKey:"user_id"});

wishlist.hasMany(WishlistItem,{foreignKey:"wishlist_id"});
WishlistItem.belongsTo(wishlist,{foreignKey:"wishlist_id"});

product.hasOne(WishlistItem,{foreignKey:"product_id"});
WishlistItem.belongsTo(product,{foreignKey:"product_id"});

users.hasOne(order_return,{foreignKey:"user_id"});
order_return.belongsTo(users,{foreignKey:"user_id"});

order.hasOne(order_return,{foreignKey:"order_id"});
order_return.belongsTo(order,{foreignKey:"order_id"});

users.hasMany(notification,{foreignKey:"user_id"});
notification.belongsTo(users,{foreignKey:"user_id"});


