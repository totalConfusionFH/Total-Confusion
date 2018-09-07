# dev_appserver.py app.yaml

from flask import Flask, render_template, request

from google.appengine.ext import ndb
import json
from decimal import Decimal, ROUND_HALF_UP, getcontext

# Polish page up
# Ginger include to edit multiple pages at a time (in the html pages)
        #            {% include "" %}

# Decimal to 2 fixed positions
# Category selected #
# Mobile view - absolutly position menu so page does not slide down, rather menu appears over page



app = Flask(__name__)
app.debug = True

class Product(ndb.Model):
    name = ndb.StringProperty()
    price = ndb.FloatProperty()
    size = ndb.IntegerProperty()
    image = ndb.StringProperty()
    category = ndb.StringProperty()


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
    x = Decimal(content.get('price'))
    print x
    price = Decimal(x.quantize(Decimal('.01'), rounding=ROUND_HALF_UP))
    print price
    product = Product(
        name=content.get('name'),
        price=float(price),
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



# @app.route('/form/')
# def form():
#     return render_template('form.html')
#
# @app.route('/submitted/', methods=['POST'])
# def submitted_form():
#     name = request.form['name']
#     email = request.form['email']
#     site = request.form['site_url']
#     comments = request.form['comments']
#
#     return render_template(
#         'submitted_form.html',
#         name=name,
#         email=email,
#         site=site,
#         comments=comments)
