<template>
    <div class="book-icon">
        <div class="page-left">
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div class="page-right">
            <span></span>
            <span></span>
            <span></span>
        </div>
    </div>
</template>
<script>
export default {
    name: "wave-icon"
};
</script>
<style lang="less" scoped>
.book-icon {
    width: 15em;
    height: 9em;
    border: 0.4em solid #ddd;
    border-radius: 0.8em;
    display: flex;
    background-color: #f5f5f5;
}

.page-left,
.page-right {
    width: 50%;
    padding: 1.2em;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}

.page-right {
    border-left: 0.4em solid #ddd;
}

.page-right > span,
.page-left > span {
    border-top: 0.4em solid #ddd;
    width: 0;
    animation: 3s linear infinite;
    -webkit-animation: 3s linear infinite;
}

.page-left > span:nth-child(1) {
    animation-name: row_1;
}

.page-left > span:nth-child(2) {
    animation-name: row_2;
}

.page-left > span:nth-child(3) {
    animation-name: row_3;
}

.page-right > span:nth-child(1) {
    animation-name: row_4;
}

.page-right > span:nth-child(2) {
    animation-name: row_5;
}

.page-right > span:nth-child(3) {
    animation-name: row_6;
}

@keyframes row_1 {
    0% {
        width: 0;
    }

    16.67%,
    100% {
        width: 100%;
    }
}
@keyframes row_2 {
    16.67% {
        width: 0;
    }

    33.33%,
    100% {
        width: 100%;
    }
}
@keyframes row_3 {
    33.33% {
        width: 0;
    }

    50%,
    100% {
        width: 100%;
    }
}
@keyframes row_4 {
    50% {
        width: 0;
    }

    66.67%,
    100% {
        width: 100%;
    }
}
@keyframes row_5 {
    66.67% {
        width: 0;
    }

    83.33%,
    100% {
        width: 100%;
    }
}
@keyframes row_6 {
    83.33% {
        width: 0;
    }

    100% {
        width: 100%;
    }
}
</style>


