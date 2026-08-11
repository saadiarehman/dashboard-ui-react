type DashboardCardProps={
    title:string
    value:number

}
function DashboardCard({title,value}:DashboardCardProps){
    return(
        <div>
                <h2>{title}</h2>
                <p>{value}</p>
        </div>
    )
}
export default DashboardCard