const Component = {
    data(){
        return {
            list : "",
            arrayList : [],
            arrayListInProgress : [],
            arrayListDone: [],
            buttonTodoList: true,
            buttonProgress: true,
            buttonDone: true,
        }
    },

    methods: {
        inputTask(e){
            this.list = e.target.value;
        },
        addButton(){
            this.arrayList.push(this.list);
            this.list = ""
        },
        deleteButton(index){
            this.arrayListDone.splice(index,1)
        },
        changeProgress(index){
            this.arrayListInProgress.push(this.arrayList[index]);
            this.arrayList.splice(index, 1);
        },
        changeDone(index){
            this.arrayListDone.push(this.arrayListInProgress[index]);
            this.arrayListInProgress.splice(index,1);
        }
    }

}

Vue.createApp(Component).mount("#root")