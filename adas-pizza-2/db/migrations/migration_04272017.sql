\connect pizza_development

CREATE TABLE IF NOT EXISTS pizza (
  id BIGSERIAL PRIMARY KEY,
  flavor VARCHAR(255),
  description VARCHAR(1024),
  flavor_key VARCHAR(255),
  location VARCHAR(255)
);