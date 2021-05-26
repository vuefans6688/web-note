<template>
  <div class="select-box">
    <div class="item-check">
      　　<input @input="checkAll" v-model="isChecked" type="checkbox" />
      　　<span>全选 / 取消</span>
    </div>
    <ul>
      　　
      <li v-for="(item, index) in list" :key="index">
        　　　<input v-model="checkValue" :value="item.id" type="checkbox" />
        　　　<span>{{ item.name }}</span> 　　　<span>{{ item.age }}</span>
        　　　<span>{{ item.money }}元</span> 　　　<button
          @click="removeItem(item.id)"
        >
          删除
        </button>
        　　
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: [
        { id: 1, name: '明明', age: 23, money: 100 },
        { id: 2, name: '红红', age: 18, money: 200 },
        { id: 3, name: '强强', age: 29, money: 300 }
      ],
      isChecked: false,  // 是否全选
      checkValue: []   // 选中的数据
    }
  },
  methods: {
    checkAll () {
      if (this.isChecked) {
        this.checkValue = []
      } else {
        this.list.forEach(item => {
          if (this.checkValue.indexOf(item.id) < 0) {
            this.checkValue.push(item.id)
          }
        })
      }
    },
    removeItem (id) {
      const index = this.list.findIndex(item => item.id === id)
      this.list.splice(index, 1)
    }
  },
  watch: {
    checkValue () {
      this.isChecked = this.checkValue.length === this.list.length ? true : false
    }
  }
}
</script>

<style lang="scss" scoped>
.select-box {
  text-align: center;
  .item-check {
    margin-right: 22px;
  }
  ul {
    li {
      list-style: none;
      margin-top: 20px;
      margin-left: 27px;
    }
    input,
    span {
      padding: 0 6px;
    }
    button {
      color: #f00;
      border: none;
    }
  }
}
</style>