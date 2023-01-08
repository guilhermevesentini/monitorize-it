<template>
    <div class="container fade-in-out">
        <div class="row">
            <div class="col-md-6">
                <div class="card">
                    <div class="card-body fade-in-out">
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="card">
                    <div class="card-body">
                    </div>
                </div>
            </div>
            <div class="col-md-12">
                <div class="card">
                    <div class="card-body">
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="card">
                    <div class="card-body">
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="card">
                    <div class="card-body">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'loadingCards'
}
</script>
<style scoped>
.card {
    width: 100%;
    height: 200px;
    margin: 20px 0;
    border: none;
    background-color: rgb(224, 224, 224);
    opacity: 1;
    transition: all 0.5s ease-in-out;
}

@keyframes fadeInOut {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

.fade-in-out {
  animation: fadeInOut 3s ease-in-out infinite;
}



</style>