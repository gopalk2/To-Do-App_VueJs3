<!-- Project Run:- npm run serve -->

<!-- A. HTML -->
<template>
  <!-- 1. h2 tag (Display Message) -->
  <div class="container">
  <h2 class="text-center mt-5">My VueJs TO-DO-APP</h2>    
  <br>

  <!-- 2. Input and Button,use click event,v-model-two way data binding, -->
  <div class="d-flex">
    <input v-model="task" type="text" placeholder="Enter task" class="form-control">
    <button @click="submitTask" class="btn btn-warning rounded-0">SUBMIT</button> 
  </div>

  <!-- 3. Task Table -->
  <table class="table table-bordered mt-5">
    <thead>
      <tr>
        <th style="background-color:#1E90FF" scope="col" class="text-center">Task</th>
        <th style="background-color:#1E90FF" scope="col" class="text-center">Status</th>
        <th style="background-color:#1E90FF" scope="col" class="text-center">Deadline</th>
        <th style="background-color:#1E90FF" scope="col" class="text-center">Edit</th>
        <th style="background-color:#1E90FF" scope="col" class="text-center">Delete</th>
      </tr>
    </thead>

    <tbody>
      <!--5. use v-for:-task-object,key-unique -->
      <tr v-for="(task, index)  in tasks" :key="index">  
        <td>
          <span :class="{'finished': task.status === 'finished'}">{{task.name}}</span>
        </td>

        <td>{{task.name}}</td>

        <td style="width: 120px">
          <span @click="changeStatus(index)" class="pointer"
          :class="{'text-danger': task.status === 'To-Do', //red
          'text-warning': task.status === 'in-progress', //yellow
          'text-success': task.status === 'finished' //green
          }">
          {{ firstCharUpper(task.status) }}
          </span>
        </td>

        <!--3.1 Create two icons- editTask and deleteTask, use click event-->
        <td>
          <div class="text-center" @click="editTask(index)"> 
          <span class="fa fa-pen"></span>
          </div>
        </td>

        <td>
          <div class="text-center" @click="deleteTask(index)">
          <span class="fa fa-trash"></span>
          </div>
        </td>

      </tr>
    </tbody>
</table>
  </div>
</template>



<!-- B. JS-Vuejs -->
<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },

  // 4. Create Data Function:-return and object (Array of 3 Objects-Vuejs Learning/Project/New Task And use 2property- name, status)
  data(){
    return {
      task: '', //property
      editedTask: null, 
      availableStatuses: ['to-do', 'in-progress', 'finished'],

      tasks: [
        {
          name: 'Vuejs Learning', //Property-name/status, Object-Vuejs Learning
          status: 'To-Do'
        },

        {
          name: 'Vuejs Project',
          status: 'in-progress'
        },

        {
          name: 'Vuejs New Task',
          status: 'finished'
        }

      ]
    }
  },

  //6.Method Objects:-submitTask, use if/else,
  methods: {
    submitTask(){
      //console.log('Hello from submit task method.')
      if(this.task.length === 0) return; //6.1 Task-property action method use

      if(this.editedTask === null){
        this.tasks.push({  //task array
        name: this.task,
        status: 'To-do'
      });
      }else{
        this.tasks[this.editedTask].name = this.task;
        this.editedTask = null;
      }
      
      this.task = '';
    },

    //7.1 Delete Task Method
    deleteTask(index){
      this.tasks.splice(index, 1);
    },

    //7.2 Edit Task Method
    editTask(index){
      this.task = this.tasks[index].name;
      this.editedTask = index;
    },

    //7.3 changeStatus Method
    changeStatus(index){
      let newIndex = this.availableStatuses.indexOf(this.tasks[index].status);
      if(++newIndex > 2) newIndex = 0;
      this.tasks[index].status = this.availableStatuses[newIndex];
  },
  firstCharUpper(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  }
};
</script>



<!-- C. CSS -->
<style scoped> 
.pointer {
  cursor: pointer;
}

/* Class */
.finished{
  text-decoration: line-through;
}

h2{
  background-color: rgb(0, 255, 162);
}

</style>
