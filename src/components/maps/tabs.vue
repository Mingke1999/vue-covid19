<script>
import Content from './content.vue';
export default {
    name:'Tabs',
    props:{
        currentIndex:{
            type:[String,Number],
            default:1
        }
    },
    data(){
        return{
            paths:[]
        }
    },
    components:{
        Content
    },
    methods:{
        getIndex(index){
            //console.log(index)
            this.$emit("switchIndex",index)
        }   
    },
    render(){
        return(
            <div>
                <ul class="tabs-header">{this.$slots.default}</ul>
                <Content paths={this.paths}/>
            </div>
        )
           
    }
}
</script>

<style scoped>
.tabs-header{
    display: flex;
    list-style: none;
    margin:0;
    padding: 0;
    border-bottom: 2px solid #ededed;
}
</style>