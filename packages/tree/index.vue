<template>
    <div class="node">
        <div v-for="node in data" :key="node.id">
            <div class="node-label" @click="handleShow(node)">
                <span v-if="node.children">+</span>
                <span v-else>-</span>
                <span>{{ node.name }}</span>
            </div>
            <transition name="show">
                <div v-show="node.show" class="node-content">
                    <tree v-if="node.children" :data="node.children"></tree>
                </div>
            </transition>
        </div>
    </div>
</template>
<script>
export default {
    name: "tree",
    props: ["data"],
    data() {
        return {};
    },
    methods: {
        handleShow(node) {
            if (node.children) {
                this.$set(node, "show", !node.show);
            }
        }
    }
};
</script>
<style lang="less" scoped>
.node-label{
    height: 30px;
    line-height: 30px;
}
.node-content {
    padding-left: 10px;
    max-height: 100px;
    overflow: hidden;
}
.show-enter-active,
.show-leave-active {
    transition: all 0.5s;
}
.show-enter,
.show-leave-to {
    max-height: 0;
}
</style>


