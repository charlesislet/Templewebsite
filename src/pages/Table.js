import React from 'react';
import Nav from '../components/Nav';
import MaterialTable from 'material-table';
const Table=()=>{
    return(
        <>
        <Nav/>
        <div>
            <MaterialTable title=''
                data={[
                    {廟宇名稱:'天后宮',祭祀主神:'天上聖母',創建:'1604',地區:1},
                    {廟宇名稱:'媽宮城隍廟',祭祀主神:'城隍爺',創建:'1779',地區:1},
                    {廟宇名稱:'山水上帝廟',祭祀主神:'玄天上帝',創建:'不詳',地區:1},
                    {廟宇名稱:'震義宮',祭祀主神:'溫府王爺',創建:'1796',地區:2},
                    {廟宇名稱:'文澳城隍廟',祭祀主神:'城隍爺',創建:'不詳',地區:1},
                ]}
                columns={[
                    {title:'廟宇名稱',field:'廟宇名稱'},
                    {title:'祭祀主神',field:'祭祀主神'},
                    {title:'創建年代',field:'創建',filtering: false},
                    {title:'地區',field:'地區',lookup:{1:'馬公',2:'西嶼'},},
                ]}
            options={{
                search:true,
                paging:false,
                filtering:true,
                exportButton:true,
            }}
            />
        </div>
        </>
    )
}

export default Table;