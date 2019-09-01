<template>
    <div>
        <tree :data="node"></tree>
    </div>
</template>
<script>
export default {
    name: "TreeDemo",
    data() {
        return {
            node: [
                {name: 'node1', children: [{name:'node1-1'},{name:'node1-2'}]},
                {name: 'node2', children: [{name:'node2-1',children: [{name:'node2-1-1'},{name:'node2-1-2'}]},{name:'node2-2'}]},
                {name: 'node3', children: [{name:'node3-1'},{name:'node3-2'}]},
                {name: 'node4'},
            ]
        }
    }
};
</script>
<style lang="less" scoped>
</style>


