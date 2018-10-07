# dev_appserver.py app.yaml

from flask import Flask, render_template, request

from google.appengine.ext import ndb
import json


app = Flask(__name__)
app.debug = True

class Product(ndb.Model):
    name = ndb.StringProperty()
    price = ndb.FloatProperty()
    size = ndb.IntegerProperty()
    image = ndb.StringProperty()
    category = ndb.StringProperty()


@app.route('/base/')
def base():
    print "id"
    return render_template('base.html')


@app.route('/')
def home():
    print "id"
    return render_template('Total-Confusion.html')


@app.route('/products/')
def products():
    products = Product.query().fetch()
    print products
    return render_template('products.html', data = {
        "products" : products
    })


@app.route('/products/<id>/')
def product(id):
    key = ndb.Key(Product, int(id))
    product = key.get()
    print product
    return render_template('product.html', data = {
        "product" : product
    })


@app.route('/categories/')
def categories():
    return render_template('categories.html')


@app.route('/categories/<id>/')
def category(id):
    query = Product.query(Product.category == id.title())
    products = query.fetch()
    print products
    return render_template('products.html', data = {
        "products" : products
    })


@app.route('/admin/')
def admin():
    print "id"
    return render_template('/admin.html')


@app.route('/admin/products/')
def admin_products():
    print "id"
    return render_template('admin/admin_products.html')


@app.route('/admin/products/form/')
def info_form():
    print "id"
    return render_template('info_form.html')


@app.route('/api/products/', methods=['POST'])
def post():
    content = request.get_json()
    product = Product(
        name=content.get('name'),
        price=float(content.get('price')),
        size=int(content.get('size')),
        image=content.get('image'),
        category=content.get('category')
    )

    product.put()
    print product.price

    return ""


@app.route('/admin/edit/<id>/')
def edit(id):
    key = ndb.Key(Product, int(id))
    product = key.get()
    print product
    return render_template('edit.html', data = {
        "product" : product
    })


@app.route('/api/products/<id>/', methods=['POST'])
def post_changes(id):
    content = request.get_json()
    print id
    key = ndb.Key(Product, int(id))
    product = key.get()
    product.name = content.get('name')
    product.price = float(content.get('price'))
    product.size = int(content.get('size'))
    product.image = content.get('image')
    product.category = content.get('category')
    product.put()
    print product
    return ""

@app.route('/about/')
def about():
    print "id"
    return render_template('about.html')


@app.route('/contact/')
def contact():
    print "id"
    return render_template('contact.html')
