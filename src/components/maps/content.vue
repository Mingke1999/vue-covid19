<script>
export default {
    name:'Content',
    props:{
        paths:{
            type:Array,
            default:()=>{
                return []
            }
        }
    },
    render(){
        return(
            <div>
                {
                    this.paths.map((ele,index)=>{
                        return ele.isActive ? ele.$slots.default : ''
                        //return <div style={{ display: ele.isActive ? 'block':'none'}}>{ele.$slots.default} </div>
                    })
                }
            </div>
        )
    }
}
</script>

<style>

</style>