<template>
    <div class="sidebar">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
            <li class="nav-item">
                <a class="nav-link show active" id="tab1-tab" data-toggle="tab" href="#tab1" role="tab"
                    aria-controls="tab1" aria-selected="true"><i class="fa fa-server"></i> Sistema</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" id="tab2-tab" data-toggle="tab" href="#tab2" role="tab" aria-controls="tab2"
                    aria-selected="false"><i class="fa-solid fa-microchip"></i> Cpu</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" id="tab3-tab" data-toggle="tab" href="#tab3" role="tab" aria-controls="tab3"
                    aria-selected="false"><i class="fa-solid fa-desktop"></i> Gráfica</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" id="tab4-tab" data-toggle="tab" href="#tab4" role="tab" aria-controls="tab4"
                    aria-selected="false"><i class="fa-solid fa-memory"></i> Memória</a>
            </li>
            <!-- <li class="nav-item">
                <a class="nav-link" id="tab4-tab" data-toggle="tab" href="#tab4" role="tab" aria-controls="tab4"
                    aria-selected="false"><i class="fa-solid fa-battery-half"></i> Bateria</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" id="tab4-tab" data-toggle="tab" href="#tab5" role="tab" aria-controls="tab5"
                    aria-selected="false"><i class="fa-solid fa-window-maximize"></i> OS</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" id="tab4-tab" data-toggle="tab" href="#tab6" role="tab" aria-controls="tab6"
                    aria-selected="false"><i class="fa-solid fa-chart-line"></i> Processo/serviço</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" id="tab4-tab" data-toggle="tab" href="#tab7" role="tab" aria-controls="tab7"
                    aria-selected="false"><i class="fa-solid fa-hdd"></i> Disco</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" id="tab4-tab" data-toggle="tab" href="#tab8" role="tab" aria-controls="tab8"
                    aria-selected="false"><i class="fa-brands fa-usb"></i> USB</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" id="tab4-tab" data-toggle="tab" href="#tab9" role="tab" aria-controls="tab9"
                    aria-selected="false"><i class="fa-solid fa-print"></i> Printer</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" id="tab4-tab" data-toggle="tab" href="#tab9" role="tab" aria-controls="tab9"
                    aria-selected="false"><i class="fa-solid fa-volume-high"></i> Audio</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" id="tab4-tab" data-toggle="tab" href="#tab10" role="tab" aria-controls="tab10"
                    aria-selected="false"><i class="fa-solid fa-network-wired"></i> Internet</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" id="tab4-tab" data-toggle="tab" href="#tab11" role="tab" aria-controls="tab11"
                    aria-selected="false"><i class="fa-solid fa-wifi"></i> Wifi</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" id="tab4-tab" data-toggle="tab" href="#tab12" role="tab" aria-controls="tab12"
                    aria-selected="false"><i class="fa-brands fa-bluetooth-b"></i> Bluetooth</a>
            </li> -->
        </ul>
    </div>
</template>

<style scoped>
.sidebar {
    width: 100%;
}

.tela-inicial .sidebar {
    width: 200px;
    background: #fff;
    height: 100%;
}

.tela-inicial .sidebar .nav {
    border-right: 1px solid #00000014;
}

/* .tela-inicial .sidebar ul li:last-child {
  position: absolute;
  bottom: 0;
  width: 200px;
} */

.tela-inicial .sidebar .nav .nav-item {
    width: 100%;
}

.tela-inicial .sidebar .nav .nav-item .nav-link {
    border: none;
    padding: 15px 10px;
    text-transform: none;
    list-style: none;
    color: #000;
}

.tela-inicial .sidebar .nav .nav-item .active {
    background-color: rgba(63, 173, 105, 0.562);
    border-radius: 0;
    width: 200px;
}

.tela-inicial .sidebar .nav .nav-item:hover {
    background-color: rgba(168, 170, 169, 0.562);
    width: 200px;
}
</style>