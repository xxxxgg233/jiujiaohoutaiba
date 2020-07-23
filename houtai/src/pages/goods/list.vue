<template>
    <div>
        <el-table
            :data="getStateGoodsList"
            border
            style="width: 100%"
            row-key="id"
            :tree-props="{children: 'children'}"
        >
            <el-table-column prop="id" label="商品编号"></el-table-column>
            <el-table-column prop="goodsname" label="商品名称"></el-table-column>
            <el-table-column prop="price" label="商品价格"></el-table-column>
            <el-table-column prop="market_price" label="市场价格"></el-table-column>
            <el-table-column prop="img" label="图片">
                <template slot-scope="item">
                    <img class="imgUrl" :src="$imgUrl+item.row.img" alt="">
                </template>
            </el-table-column>
            <el-table-column prop="isnew" label="是否新品">
                <template slot-scope="item">
                    <el-tag v-if="item.row.isnew==1" type="success">是</el-tag>
                    <el-tag v-if="item.row.isnew==2" type="danger">否</el-tag>
                </template>
            </el-table-column>
            <el-table-column prop="ishot" label="是否热卖">
                <template slot-scope="item">
                    <el-tag v-if="item.row.ishot==1" type="success">是</el-tag>
                    <el-tag v-if="item.row.ishot==2" type="danger">否</el-tag>
                </template>
            </el-table-column>
            <el-table-column prop="status" label="状态">
                <template slot-scope="item">
                    <el-tag v-if="item.row.status==1" type="success">启动</el-tag>
                    <el-tag v-if="item.row.status==2" type="danger">禁用</el-tag>
                </template>
            </el-table-column>
            <el-table-column label="操作" width="180">
                <template slot-scope="item">
                    <el-button size="small" type="primary" @click="update(item.row.id)">编辑</el-button>
                    <el-button size="small" type="danger" @click="del(item.row.id)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-pagination
            background
            layout="prev, pager, next"
            :page-size="pageInfo.size"
            :total="count"
            @current-change="getPage"
        ></el-pagination>
    </div>
</template>

<script>
import { getgoodsDelete, getgoodsCount } from '../../util/axios'
import { mapActions, mapGetters } from 'vuex'
export default {
    data() {
        return {
            count: 0, 
            pageInfo: {
                size: 5, 
                page: 1 
            }
        }
    },
    computed: {
        ...mapGetters(['getStateGoodsList'])
    },
    mounted() {
        this.getCount()
    },
    methods: {
        ...mapActions(['getActionGoodsList']),
        update(id) {
            this.$emit('edit', {
                isAdd: false,
                dialogIsShow: true,
                id
            })
        },
        del(id) {
            this.$confirm('确定删除?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            })
                .then(() => {
                    getgoodsDelete({ id }).then(res => {
                        if (res.data.code == 200) {
                            this.getActionGoodsList()
                            this.$message.success(res.data.msg)
                        } else {
                            this.$message.error(res.data.msg)
                        }
                    })
                })
                .catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    })
                })
        },
        getCount() {
            getgoodsCount().then(res => {
                if (res.data.code == 200) {
                    this.count = res.data.list[0].total
                    if (
                        this.pageInfo.page != 1 &&
                        this.getStateGoodsList.length == 1
                    ) {
                        this.pageInfo.page--
                    }
                    this.$store.dispatch('getActionGoodsList', this.pageInfo)
                }
            })
        },
        getPage(n) {
            this.pageInfo.page = n
            this.$store.dispatch('getActionGoodsList', this.pageInfo)
        }
    }
}
</script>

<style  lang="" scoped>
.el-pagination {
    float: right;
    margin: 16px 0;
}
.imgUrl{
    width: 150px;
}
</style>
