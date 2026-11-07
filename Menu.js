
document.addEventListener("DOMContentLoaded", function() {
    const HTMLmenu = `
        <nav>
        <ul class="menu" >
            <li class="menu-item" style="margin-right: auto; "> 
                <a href="Index.html"><b>Home </b></a>
                
            </li>

            <li class="menu-item">
                <a href="Coding.html" style="text-decoration: none;">Coding</a>
                <ul class="menu-subitem">
                    <li><a href="BakingConverter/Baking-Imperial-to-Metric-Converter.html" target="_blank" >Baking Converter</a></li>
                    <li><a href="EMILHome.html">Name Tag</a></li>
                    <li><a href="Algebrator/Home.html" target="_blank" >Algebrator</a></li>
                    <li><a href="FishSimHome.html">Fish Room</a></li>
                    <li><a href="SnakeHome.html">Snake</a></li>
                    <li><a href="Algebranator/Algebranator.html" target="_blank" >Algebranator</a></li>
                    
                    <!--<li><a href="3DModelHome.html">3D Modeling</a></li>-->
                </ul>
            </li>
                
            <li class="menu-item">
                <a href="Arts.html" style="text-decoration: none; ">Art</a>
                <ul class="menu-subitem">
                    <li><a href="PencilHome.html">Visual Art</a></li>
                    <li><a href="PianoHome.html">Music</a></li>
                </ul>
            </li>
<!--
            <li class="menu-item">
                <a href="Arts.html" style="text-decoration: none; ">Awards</a>
                <ul class="menu-subitem">
                    <li><a href="PencilHome.html">Awards</a></li>
                    <li><a href="PianoHome.html">Music</a></li> 
                </ul>
            </li>
-->
            <!-- <li><a><img  style="width: 30px; height: 30px;" src="Images/picplaceholder.png" ></a></li> -->
        </ul>

        
    </nav>
    `;
    document.getElementById("menu").innerHTML = HTMLmenu;

});



