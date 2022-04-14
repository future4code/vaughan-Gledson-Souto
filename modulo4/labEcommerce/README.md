<p> 
CREATE TABLE labecommerce_users(
id VARCHAR(255) PRIMARY KEY,
name VARCHAR(255) NOT NULL,
email VARCHAR(255) UNIQUE NOT NULL,
password VARCHAR(255) NOT NULL
);
</p>

<p> 
CREATE TABLE labecommerce_products(
id VARCHAR(255) PRIMARY KEY,
name VARCHAR(255) NOT NULL,
price FLOAT NOT NULL,
img_url VARCHAR(255) NOT NULL
);
</p>

<p>
- CREATE TABLE labecommerce_purchases(
id VARCHAR(255) PRIMARY KEY,
user_id VARCHAR(255) NOT NULL,
product_id VARCHAR(255) NOT NULL,
FOREIGN KEY (user_id) REFERENCES labecommerce_users(id),
FOREIGN KEY (product_id) REFERENCES labecommerce_products(id),
quantity FLOAT DEFAULT 0,
total_price FLOAT DEFAULT 0
);
</p>