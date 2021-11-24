# README

Updated for tables. Removing div tags from around Autoextra so you can add your own.

Suppose that you have a form based on a collection of data. And you want to be
able to easily add a new entry. Autoextra is giving you exactly that: it will
repeat the same form section for all items in the collection, but it will also
magically add a new entry that will be added to the collection the moment you
start editing its data. (Which will then in turn trigger a new entry getting
added.)

```html
<autoextratable :collection="persons" v-slot="{item,last,index}">
  <div class="columns" :class="{last: last}">
    <div class="field column">
      <div class="control">
        <label class="label">{{last ? 'New ' : ''}}Person {{!last ? index + 1 : ''}}</label>
        <input class="input" type="text" v-model="item.name"/>
      </div>
    </div>
    <div class="field column">
      <label class="label">Age</label>
      <div class="control">
        <input class="input" type="number" v-model="item.age"/>
      </div>
    </div>
  </div>
</autoextatable>
```
