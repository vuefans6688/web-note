<template>
  <div class="message-form">
    <div class="control">
      <v-input v-model="userName"></v-input>
      <v-textarea v-model="message" ref="message"></v-textarea>
      <div class="send">
        <button @click="handleSend">发布</button>
      </div>
    </div>
    <v-list :list="list" @reply="handleReply"></v-list>
  </div>
</template>

<script>
import vInput from '@/components/vInput'
import vTextarea from '@/components/vTextarea'
import vList from '@/components/vList'
export default {
  components: {
    vInput, 
    vTextarea, 
    vList
  },
  data () {
    return {
      id: 1,
      userName: '',
      message: '',
      list: []
    }
  },
  methods: {
    handleSend () {
      if (this.userName === '' || this.message === '') {
        alert('请输入昵称和内容')
        return
      }
      // 数组list存储了所有的留言内容，通过函数传给list添加一项留言数据，添加成功后把文本框置空
      this.list.push({
        id: this.id++,
        userName: this.userName,
        message: this.message
      })
      this.userName = ''
      this.message = ''
    },
    handleReply (index) {
      const userName = this.list[index].userName
      this.message = '回复@' + userName + ' : '
      this.$refs.message.focus()
    }
  }
}
</script>

<style lang="scss" scoped>
.message-form {
  text-align: center;
  .send {
    margin-top: 20px;
    margin-left: 50px;
  }
}
</style>