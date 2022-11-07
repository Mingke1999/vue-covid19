<script>
export default {
    name:'Tab',
    props:{
        label:{
            type:String,
            default:'tab'
        },
        index:{
            type:[String,Number],
            default:1
        }
    },
    computed:{
        isActive(){
            return this.$parent.currentIndex==this.index
        }
    },
    methods:{
        isSelected(){
            //console.log(123)
            this.$parent.getIndex(this.index)
        }
    },
    mounted(){
        //console.log(this.$parent.currentIndex)
        this.$parent.paths.push(this)
    },
    render(){
        //console.log(this.isActive)
        let classNames = {
            tab:true,
            active:this.isActive
        }
        return(
            <li class={classNames} onClick={this.isSelected}>
                {this.label}
            </li>
        )
    }
}
</script>

<style scoped>
.tab{
    flex:1;
    list-style: none;
    line-height: 40px;
    margin-right: 30px;
    position: relative;
    text-align: center;
    cursor: pointer;
}
.tab.active{
    border-bottom: 2px solid blue;
}
</style>