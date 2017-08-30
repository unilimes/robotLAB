import {Preloader} from "./preloader/glPreloader.js";

export class Robot {

    constructor() {
        let self = this,
            bonesAn = this.bonesAn = [
                {name: "Base HumanLUpperarm"},
                {name: "Base HumanLForearm"},
                {name: "Base HumanHead"},
                {name: "Base HumanSpine1"},
                {name: "Base HumanLThigh"},
                {name: "Base HumanLCalf"},
                {name: "Base HumanRUpperarm"},
                {name: "Base HumanRThigh"},
                {name: "Base HumanRCalf"},
                {name: "Base HumanLFoot"},
                {name: "Base HumanRFoot"},
                {name: "Base HumanLPalm"},
                {name: "Base HumanRForearm"},
                {name: "Base HumanRPalm"},


                {name: "Base HumanPalmBone001"},
                {name: "Base HumanPalmBone001Bone001"},
                {name: "Base HumanPalmBone001Bone001Bone001"},
                {name: "Base HumanPalmBone001Bone001Bone001Bone001"},
                {name: "Base HumanPalmBone002"},
                {name: "Base HumanPalmBone002Bone001"},
                {name: "Base HumanPalmBone002Bone001Bone001"},
                {name: "Base HumanPalmBone002Bone001Bone001Bone001"},
                {name: "Base HumanPalmBone003"},
                {name: "Base HumanPalmBone003Bone001"},
                {name: "Base HumanPalmBone003Bone001Bone001"},


                {name: "Base HumanPalmBone001_ncl1_1"},
                {name: "Base HumanPalmBone001Bone001_ncl1_1"},
                {name: "Base HumanPalmBone001Bone001Bone001_ncl1_1"},
                {name: "Base HumanPalmBone001Bone001Bone001Bone001_ncl1_1"},
                {name: "Base HumanPalmBone002_ncl1_1"},
                {name: "Base HumanPalmBone002Bone001_ncl1_1"},
                {name: "Base HumanPalmBone002Bone001Bone001_ncl1_1"},
                {name: "Base HumanPalmBone002Bone001Bone001Bone001_ncl1_1"},
                {name: "Base HumanPalmBone003_ncl1_1"},
                {name: "Base HumanPalmBone003Bone001_ncl1_1"},
                {name: "Base HumanPalmBone003Bone001Bone001_ncl1_1"}
            ],
            _hadsData = this.hats = [
                {
                    url: 'assets/models/hats/hat1/Mens_Straw_Hat_convert.obj',
                    holds: {
                        pL: {
                            point: new THREE.Vector3(10.0788642272841, 15.474112801163294, 72.64251292063625)
                        }, pR: {
                            point: new THREE.Vector3(10.0788642272841, 15.474112801163294, -72.64251292063625)
                        }
                    },
                    transform: {
                        pst: new THREE.Vector3(2.6461622746187836, 1.307610727896102, -0.007764772583092765),
                        scale: 6,
                        quad: new THREE.Quaternion(0.6927704271605668, 0.06410088007133359, 0.7159110578899597, -0.05857945657625961)
                    },
                    animations: {
                        shoulder: 105,
                        elbow: 81
                    },
                    modes: {
                        1: {
                            shoulder:63.86,
                            elbow: 61.36,
                            low_arm: 2.29
                        },
                        2: {
                            elbow: 85.48,
                            low_arm: 1.74,
                            upper_arm: 1.45,
                        },
                        3: {
                            low_arm: 1.88,
                            upper_arm: 1.43,
                            shoulder_arm_length: 2.29
                        }
                    }

                },
                {
                    url: 'assets/models/hats/hat2/TopHat.obj',
                    holds: {
                        pL: {
                            point: new THREE.Vector3(26.173526682122137, 15.270325792054507, 64.7025287089384)
                        }, pR: {
                            point: new THREE.Vector3(26.173526682122137, 0.270325792054507, -64.7025287089384)
                        }
                    },
                    transform: {
                        pst: new THREE.Vector3(47.16500546161661, 9.767005100127037, 0.8946109530106339),
                        scale: 3,
                        quad: new THREE.Quaternion(-0.4781335660048403, -0.511808833617215, 0.4745965196137678, -0.533102384815986)
                    },
                    animations: {
                        shoulder: 105,
                        elbow: 78.48
                    },
                    modes: {
                        1: {
                            shoulder:63.86,
                            elbow: 61.36,
                            low_arm: 2.29
                        },
                        2: {
                            elbow: 80.48,
                            low_arm: 1.64,
                            upper_arm: 1.25,
                        },
                        3: {
                            low_arm: 1.88,
                            upper_arm: 1.43,
                            shoulder_arm_length: 2.29
                        }
                    }
                },
                {
                    url: 'assets/models/hats/Maracas_and_Sombrero_Collection_obj/Mexican_Straw_Sombrero_obj/Mexican_Straw_Sombrero_convert.obj',
                    holds: {
                        pL: {
                            point: new THREE.Vector3(33.728348721933784, 18.794033116838667, 97.55742505694764)
                        }, pR: {
                            point: new THREE.Vector3(33.728348721933784, 18.794033116838667, -97.55742505694764)
                        }
                    },
                    transform: {
                        pst: new THREE.Vector3(10.343596318548284, 7.527326655635123, 0.7646422200297462),
                        scale: 4.2,
                        quad: new THREE.Quaternion(-0.017024115231427925, 0.6986633183823596, 0.06749743854692784, 0.7120560671174201)
                    },
                    animations: {
                        shoulder: 81.32,
                        elbow: 78.8
                    },
                    modes: {
                        1: {
                            shoulder:63.86,
                            elbow: 61.36,
                            low_arm: 2.29
                        },
                        2: {
                            elbow: 81.48,
                            low_arm: 1.34,
                            upper_arm: 1.55,
                        },
                        3: {
                            low_arm: 1.28,
                            upper_arm: 1.13,
                            shoulder_arm_length: 2.59
                        }
                    }
                }
            ],
            tweenParameters = {},
            bonesPrefix = this.bonesPrefix = ["UpperArm", "Forearm", "Thigh", "Head", "Calf", "palm", "spine", "Foot"],
            prefixes = ["base human", "Base HumanLPalm"],
            bones = this.bones = [
                {
                    name: bonesPrefix[0],
                    rotation: {x: 90, y: 45, z: 90},
                    position: {x: 50, y: 45, z: 10},
                    scale: {x: 2, y: 2, z: 2}
                },
                {
                    name: bonesPrefix[1],
                    rotation: {x: 90, y: 45, z: 45},
                    position: {x: 50, y: 10, z: 10},
                    scale: {x: 2, y: 2, z: 2}
                },
                {
                    name: bonesPrefix[2],
                    rotation: {x: 90, z: 45, y: 45},
                    position: {x: 60, y: 10, z: 50},
                    scale: {x: 2, y: 2, z: 2}
                },
                {
                    name: bonesPrefix[3],
                    rotation: {x: 90, y: 60, z: 90},
                    position: {x: 15, y: 10, z: 10},
                    scale: {x: 2, y: 2, z: 2}
                }, {
                    name: bonesPrefix[4],
                    rotation: {x: 90, y: 60, z: 90},
                    position: {x: 15, y: 10, z: 10},
                    scale: {x: 2, y: 2, z: 2}
                }, {
                    name: bonesPrefix[5],
                    rotation: {x: 90, y: 60, z: 90},
                    position: {x: 15, y: 10, z: 10},
                    scale: {x: 2, y: 2, z: 2}
                }
            ],
            folders = this.folders = {},
            kinematics,
            headBone,
            handBone,
            dae,
            keys = [],
            par = this.par = {
                showHotPointsOfCurHat: true,
                animations: [],
                bones: [],
                hats: [],
                hatss: [],//.Easing.Exponential.In
                easing: ["Exponential.In", "Exponential.Out", "Linear.None", "Quadratic.In", "Sinusoidal.In", "Back.In"],
                createAnimation: function () {
                    keys = [];
                    ["saveKey", "saveAnimation", "multiKeys"].forEach(function (e) {
                        self.disableGUI(folders["Animation"][e], true);
                    });
                    self.disableGUI(folders["Animation"]["createAnimation"]);

                },
                saveKey: function () {
                    if (!self.transformControl.object)return console.log("select the bone");
                    let transformControl = self.transformControl;
                    if (this.multiKeys) {
                        if (!keys.length)keys.push({});
                        if (!keys[keys.length - 1].list)keys[keys.length - 1].list = [];
                        keys[keys.length - 1].list.push({
                            bone: {
                                name: transformControl.object.name,
                                obj: transformControl.object
                            },
                            transform: {
                                pst: transformControl.object.position.clone(),
                                rotation: transformControl.object.quaternion.clone()
                            }
                        });
                    } else {
                        keys.push({
                            bone: {name: transformControl.object.name, obj: transformControl.object},
                            transform: {
                                pst: transformControl.object.position.clone(),
                                rotation: transformControl.object.quaternion.clone()
                            }
                        });
                    }

                },
                saveAnimation: function () {
                    if (!keys.length)return;
                    var _sd = keys.concat([]).map(function (el) {
                        var res = {};
                        if (el.list) {
                            res.list = [];
                            el.list.forEach(function (elm) {
                                res.list.push({bone: {name: elm.bone.name}, transform: elm.transform})
                            });
                        } else {
                            res = {bone: {name: el.bone.name}, transform: elm.transform};
                        }
                        return res;
                    });
                    console.log(JSON.stringify(_sd));
                    this.reset();
                    ["saveKey", "saveAnimation", "multiKeys"].forEach(function (e) {
                        self.disableGUI(folders["Animation"][e]);
                    });
                    self.disableGUI(folders["Animation"]["createAnimation"], true);

                    (function playAn() {
                        self.startTween(keys.concat([]), ()=> {
                            if (!self.par.stopAnimating)playAn();
                        });
                    })()

                },
                multiKeys: false,
                reset: function () {
                    dae.traverse(function (child) {
                        if (child.rotation && child.defRotatioins) {
                            child.rotation.copy(child.defRotatioins);
                        }
                    });
//                        bonesAn.forEach(function(bone){
//                            bone.obj.rotation.copy(bone.obj.defRotatioins);
//                        })
                },
                check: function () {
                    if (!self.isFinish)return;
                    let _self = this;
                    if (!this.shoulder || !this.elbow) {
                        return alert("please input all data")
                    }

                    let onFinish = ()=> {
                        this.reset();
                        let
                            isRightHand = !(_self.shoulder < 0 || _self.elbow < 0),
                            animations = [
                                isRightHand ?
                                {
                                    list: [{
                                        bone: bonesAn[0],
                                        value: new THREE.Quaternion(-0.44133939739680156, -0.46080319382625545, -0.26048069855417466, 0.7245893689119687)
                                    }, {
                                        bone: bonesAn[1],
                                        value: new THREE.Quaternion(-0.7040934085008751, -0.15608189604669415, 0.16867749553081673, 0.6718919951855267)
                                    }
                                    ]
                                } : {
                                    list: [{
                                        bone: bonesAn[6],
                                        value: new THREE.Quaternion(-0.44847885970614304, -0.49297173696107754, 0.23161557622836987, -0.7086605709404803)
                                    }, {
                                        bone: bonesAn[12],
                                        value: new THREE.Quaternion(0.7245448399115976, 0.11118098022068804, 0.080144508369976, 0.6754632715635661)
                                    }
                                    ]
                                },
                            ],

                            hotPoint = isRightHand ? 'pL' : 'pR',
                            fingersInd = (isRightHand ? 14 : 25);
                        [
                            {n: 'shoulder', b: isRightHand ? bonesAn[0] : bonesAn[6], v: new THREE.Vector3(0, 0, 1)},
                            {
                                n: 'elbow',
                                b: isRightHand ? bonesAn[1] : bonesAn[12],
                                v: new THREE.Vector3(0, isRightHand ? -1 : 1, 0)
                            },
                            {n: 'wrist', b: isRightHand ? bonesAn[11] : bonesAn[13], v: new THREE.Vector3(0, 0, 1)}
                        ].forEach((el, key)=> {
                                let quat = new THREE.Quaternion();//el.b.obj.quaternion.clone().setFromAxisAngle(el.v, (_self[el.n]|0) * Math.PI / 180);
                                quat.setFromAxisAngle(el.v, (isRightHand ? 1 : -1) * (_self[el.n] | 10) * Math.PI / 180);
                                if (animations[0].list[key]) {
                                    quat = animations[0].list[key].value.clone().multiply(quat);
                                } else {
                                    quat = el.b.obj.quaternion.clone().multiply(quat);
                                }
                                animations.push({bone: el.b, value: quat});
                                let lastAnm = animations[animations.length - 1];
                                if (key == 1) {
                                    lastAnm.list = [
                                        {bone: lastAnm.bone, value: lastAnm.value}
                                    ];
                                    //fingers
                                    for (let i = fingersInd, maxI = fingersInd + 11, firstTwoFin = fingersInd + 8, items = 0; i < maxI; i++) {
                                        if (items > 3)items = 0;

                                        if (items < 2) {
                                            let angle = (i < firstTwoFin ? 1 : (isRightHand ? -1 : 1)) * ((i < firstTwoFin ? (isRightHand ? 1 : -1) * 15 : 30) - items) * Math.PI / 180;
                                            lastAnm.list.push({
                                                bone: bonesAn[i],
                                                value: bonesAn[i].obj.quaternion.clone().setFromAxisAngle(new THREE.Vector3(0, 0, isRightHand ? 1 : -1), angle)
                                            });
                                        }
                                        items++

                                    }
                                } else if (key == 2) {
                                    lastAnm.onComplete = function (keys) {

                                        if (par.isDressed) {
                                            par.currentHat.quaternion.copy(par.currentHat.defQuaternion);
                                            par.currentHat.position.copy(par.currentHat.defPst);
                                            bonesAn[2].obj.add(par.currentHat);
                                            par.isDressed = !par.isDressed;
                                        } else {
                                            if (true || self.checkIfHandCanHoldTheHat(lastAnm.bone.obj, par.currentHat.hat[hotPoint])) {
                                                if (!par.currentHat.defQuaternion)par.currentHat.defQuaternion = par.currentHat.quaternion.clone();
                                                if (!par.currentHat.defPst)par.currentHat.defPst = par.currentHat.position.clone();

                                                THREE.SceneUtils.detach(par.currentHat, par.currentHat.parent, self.scene);
                                                par.currentHat.updateMatrixWorld(true);
                                                THREE.SceneUtils.attach(par.currentHat, self.scene, isRightHand ? bonesAn[1].obj : bonesAn[13].obj);
                                                par.isDressed = !par.isDressed;
                                            } else {
                                                keys.splice(0, keys.length - 2);
                                            }
                                        }
                                    }
                                }
                            });

                        //hold the hat with fingers
                        animations.push({
                            list: animations[2].list.map((e)=> {
                                return {bone: e.bone};
                            }).filter((e, i)=> {
                                return i > 0
                            })
                        });
                        animations.push(animations[0]);
                        animations.push({
                            bone: bonesAn[3],
                            value: new THREE.Quaternion(-2.7755575615628914e-17, 5.551115123125783e-17, 0.63162163217242, 0.7752767981642739)
                        });
                        animations.push({
                            bone: bonesAn[3],
                        });
                        animations.push(animations[1], animations[2], animations[3]);
                        animations.push({
                            list: [
                                {
                                    bone: isRightHand ? bonesAn[0] : bonesAn[6]
                                }, {
                                    bone: isRightHand ? bonesAn[1] : bonesAn[12]
                                }, {
                                    bone: isRightHand ? bonesAn[11] : bonesAn[13]
                                },
                                ...animations[4].list
                            ]
                        });
                        self.startTween(animations);
                    };
                    if (!par.currentHat) {
                        self.selectHat(0, ()=> {
                            onFinish();
                        })
                    } else {
                        onFinish();
                    }
                },
                rotation: {x: 0, y: 0, z: 0},
            },
            changes = ['position', 'rotation', 'scale'],
            items = 0,
            gui = this.gui = new dat.GUI({width: 350}),
            model = location.href.split("=")[1] || "test",
            animationsKeys,
            selectedBone;


        function init() {
            let camera = self.camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 200000);
            camera.position.set(6437.114203698225, 7901.962179770281, 13914.93923245768);

            let scene = self.scene = new THREE.Scene();

            // Grid

            //let grid = new THREE.AxisHelper(100);
            //scene.add(grid);
            //let floor = new THREE.Mesh(new THREE.PlaneBufferGeometry(10, 20), new THREE.MeshPhongMaterial({/*side:THREE.DoubleSide*/}));
            //floor.receiveShadow = true;
            //floor.scale.multiplyScalar(3000);
            //floor.rotation.x = -Math.PI / 2;
            //
            //// Add the COLLADA
            //scene.add(floor);


            // Lights
            let lightContainer = new THREE.Object3D();
            let light = new THREE.HemisphereLight(0xffeeee, 0x111122);
            lightContainer.add(light);
            let ambient = new THREE.AmbientLight(0xffffff, 0.1);

            let spotLight = new THREE.SpotLight(0xffffff, 0.61);
            spotLight.position.copy(camera.position);
            spotLight.angle = 0.49;//Math.PI / 4;
            spotLight.penumbra = 0.9;
            spotLight.decay = 2;
            spotLight.distance = camera.far;

            //gui.add(spotLight, "decay");
            //gui.add(spotLight, "distance");
            //gui.add(spotLight, "penumbra");
            //gui.add(spotLight, "angle");
            //gui.add(spotLight, "intensity");
            spotLight.castShadow = true;
            spotLight.shadow.mapSize.width = 1024;
            spotLight.shadow.mapSize.height = 1024;
            spotLight.shadow.camera.near = 10;
            spotLight.shadow.camera.far = spotLight.distance;
            lightContainer.add(spotLight);

            let lightHelper = new THREE.SpotLightHelper(spotLight);
            //lightContainer.add(lightHelper);

            let shadowCameraHelper = new THREE.CameraHelper(spotLight.shadow.camera);
            //lightContainer.add(shadowCameraHelper);
            scene.add(lightContainer);

            let renderer = self.renderer = self.gl = new THREE.WebGLRenderer({
                antialias: true,
                alpha: true,
                clearAlpha: true,
                sortObjects: false,
                preserveDrawingBuffer: true
            });
            renderer.setPixelRatio(window.devicePixelRatio);
            renderer.setClearColor(0xffffff, 0);
            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.shadowMap.enabled = true;
            renderer.shadowMap.type = THREE.PCFSoftShadowMap;
            renderer.gammaInput = renderer.gammaOutput = renderer.shadowMap.enabled;
            container.appendChild(renderer.domElement);
            let controls = self.controls = new THREE.OrbitControls(camera, renderer.domElement);
            controls.target.set(1049.8072574334726, 2568.9102890483537, -1812.103531046304);
            let transformControl = self.transformControl = new THREE.TransformControls(camera, renderer.domElement);
            transformControl.addEventListener('change', function () {
                if (this.object)console.log(this.object);
            });
            transformControl.setMode("rotate");
            onLoadDae();
            scene.add(self.loadedModels);
            self.onFinishInitApp();
            window.addEventListener('resize', ()=> {
                camera.aspect = window.innerWidth / window.innerHeight;
                camera.updateProjectionMatrix();

                renderer.setSize(window.innerWidth, window.innerHeight);
            }, false);
            window.addEventListener('keydown', function (event) {
                //console.log(event.which);
                switch (event.keyCode) {
                    case 81: // Q
                        transformControl.setSpace(transformControl.space == "local" ? "world" : "local");
                        break;
                    case 87: // W
                        transformControl.setMode("translate");
                        break;
                    case 69: // E
                        transformControl.setMode("rotate");
                        break;
                    case 82: // R
                        transformControl.setMode("scale");
                        break;
                    case 187:
                    case 107: // +,=,num+
                        transformControl.setSize(transformControl.size + 0.1);
                        break;
                    case 189:
                    case 10: // -,_,num-
                        transformControl.setSize(Math.max(transformControl.size - 0.1, 0.1));
                        break;
                }
            });

            function animate() {

                requestAnimationFrame(animate);

                render();
                TWEEN.update();
                controls.update();

            }

            function render() {
                var timer = Date.now() * 0.0001;
                renderer.render(scene, camera);

            }

            //self.startTween(animationsKeys[2].keyFrames);

            animate();
            self.preloader.fade();
            animationsKeys[3].keyFrames[animationsKeys[3].keyFrames.length - 1].onComplete = ()=> {
                setTimeout(()=> {
                    self.mGui.reset(null, ()=> {
                    });
                }, 2000);
            }
            self.startTween(animationsKeys[3].keyFrames);

        }

        function onLoadDae() {
            let _bones = [],
                hatsData = _hadsData;
            dae.traverse(function (child) {
                child.castShadow = true;
                if (child.rotation) {
                    child.defRotatioins = child.rotation.clone();
                    child.defQuads = child.quaternion.clone();
                }

                if (child.type == 'Mesh') {
                    for (let i = 0; i < child.material.length; i++) {
                        child.material[i].shading = THREE.SmoothShading;
                        child.material[i].transparent = false;
                        child.material[i].side = THREE.DoubleSide;
                    }
                } else {
                    for (var i = 0; i < bonesPrefix.length; i++) {
                        if (child.name.toLowerCase().match(bonesPrefix[i].toLowerCase()) && child.name.toLowerCase().match(prefixes[0])) {
                            for (var bi = 0; bi < bonesAn.length; bi++) {
                                if (child.name == bonesAn[bi].name) {
                                    bonesAn[bi].obj = child;
                                    break;
                                }
                            }
                            if (child.name == bonesAn[11].name || child.name == bonesAn[13].name) {
                                let radius = 10;
                                child.pointer = new THREE.Mesh(new THREE.SphereBufferGeometry(radius, 32, 32), new THREE.MeshPhongMaterial({color: 0xff0000}));
                                child.pointer.visible = false;
                                child.pointer.radius = radius;
                                child.add(child.pointer);
                                if (child.name == bonesAn[13].name) {
                                    child.pointer.position.set(31.49686623953106, 3.1349675959774874, -7.751790789956426);
                                } else {
                                    child.pointer.position.set(27.799752844408744, 7.132816152095824, 8.33915996420456);
                                }
                            }
                            _bones.push(child);
                        }
                    }
                }
            });
            self.hotPoints = new THREE.Object3D();
            dae.add(self.hotPoints);
            self.dae = dae;
            for (let its = 0, itsss = -1; itsss < 2; itsss++) {
                //var geometry = new THREE.CylinderBufferGeometry(itsss < 1 ? 6 : 7, itsss == 1 ? 6 : 7, itsss * 1.8 + 10, 32);
                //var material = new THREE.MeshPhongMaterial();
                var cylinder = new THREE.Object3D();
                //    mesh = new THREE.Mesh(geometry, material),
                //    downwS = new THREE.Mesh(new THREE.CylinderBufferGeometry(7, 7, 0, 32), material);
                //mesh.rotation.z = Math.PI / 2;
                cylinder.hatData = hatsData[its++];
                cylinder.position.set(55, -1.4, 4);
                //cylinder.position.copy(cylinder.hatData.transform.pst);
                //cylinder.scale.copy(cylinder.hatData.transform.scl);
                //cylinder.rotation.set(cylinder.hatData.transform.rt.x, cylinder.hatData.transform.rt.y, cylinder.hatData.transform.rt.z);
                //if (cylinder.hatData.transform.quad)cylinder.quaternion.copy(cylinder.hatData.transform.quad);
                //downwS.position.y = (itsss * 2 + 10) / 2;
                //cylinder.add(new THREE.Mesh(new THREE.CylinderBufferGeometry(7, 7, 0, 32), new THREE.MeshPhongMaterial()));

                //mesh.add(downwS);
                par.hats.push(cylinder);
                //cylinder.scale.multiplyScalar(8);

            }
            TWEEN.curEasing = TWEEN.Easing.Exponential.In;
            gui.add(par, "hatss", par.hats.concat([]).map(function (c, i) {
                return i
            })).listen().onChange(function (value) {
                self.selectHat(value);
            });
            let inputs = gui.addFolder('Inputs');
            inputs.open();
            ['shoulder', 'elbow'].forEach((el)=> {
                par[el] = 10;
                inputs.add(par, el).min(-180).max(180).step(0.01);
            })
            inputs.add(par, "check");

            let an = folders["Animation"] = gui.addFolder("Animation");
            par.stopAnimating = false;
            an.createAnimation = an.add(par, "createAnimation");
            an.saveKey = an.add(par, "saveKey");
            an.saveAnimation = an.add(par, "saveAnimation");
            an.multiKeys = an.add(par, "multiKeys");
            an.stopAnimating = an.add(par, "stopAnimating");
            ["saveKey", "saveAnimation", "multiKeys"].forEach(function (e) {
                self.disableGUI(an[e]);
            });

            let _bonesListItems = _bones.map(function (el, index) {
                return el.name + "__" + index
            });
            _bonesListItems.push('_main_');
            gui.add(par, "easing", par.easing).listen().onChange(function (value) {
                TWEEN.curEasing = TWEEN.Easing[value.split(".")[0]][value.split(".")[1]]
            });
            gui.add(par, "reset");
            gui.add(par, "bones", _bonesListItems).listen().onChange(function (value) {
                if (value == '_main_') {
                    selectedBone = dae;
                } else {
                    selectedBone = _bones[value.split("__")[1]];
                }
                self.scene.remove(self.transformControl);
                self.transformControl.detach();
                self.transformControl.attach(selectedBone);
                self.scene.add(self.transformControl);
            });
            gui.add(par, "showHotPointsOfCurHat").onChange((val)=> {
                if (par.currentHat) {
                    par.currentHat.hat.pL.visible = par.currentHat.hat.pR.visible = val;
                }
                bonesAn[11].obj.pointer.visible = bonesAn[13].obj.pointer.visible = val;
            });

            animationsKeys = [
                {
                    name: "hat dress", keyFrames: [
                    {
                        list: [
                            {
                                bone: bonesAn[0],
                                value: new THREE.Quaternion(-0.4621439831718533, -0.33867064352656906, 0.5514801509449086, 0.5125966899388396)
                            },
                        ]
                    },
                    {
                        list: [
                            {
                                bone: bonesAn[1],
                                abs: "y",
                                value: new THREE.Quaternion(-0.2621439831718533, -0.46867064352656906, 0.4514801509449086, 0.7125966899388396)
                            },
                        ]
                    },

                    {
                        list: [
                            {
                                bone: bonesAn[0],
                                value: new THREE.Quaternion(-0.33337136196114764, -0.49747483772336454, 0.6606411278339558, 0.45260776138612496)
                            },
                            {
                                bone: bonesAn[2],
                                value: new THREE.Quaternion(-0.01495854770728211, -0.014532487985261272, -0.1052911855771364, -0.9942227195903173)
                            },
                            {
                                bone: bonesAn[1],
                                value: new THREE.Quaternion(0.3310481974331674, 0.6081927481877184, -0.4532810026504598, -0.5613005906990813)
                            },
                        ], onComplete: function () {
                        if (!par.currentHat.defQuaternion)par.currentHat.defQuaternion = par.currentHat.quaternion.clone();
                        if (!par.currentHat.defPst)par.currentHat.defPst = par.currentHat.position.clone();
                        par.currentHat.quaternion.copy(new THREE.Quaternion(0.25969443230596445, 0.5884451591346814, -0.24462311396650188, -0.7255569240720134))
                        par.currentHat.position.set(par.currentHat.position.x + 11.9390217292922, -10.970720931874563, 59.029847585849446);
                        handBone.add(par.currentHat);
                    }
                    },
                    {
                        list: [
                            {
                                bone: bonesAn[1],
                                value: new THREE.Quaternion(-0.3720833464882111, -0.1563140988007093, 0.15761052137997905, 0.901245438814061)
                            },
                            {
                                bone: bonesAn[0],
                                value: new THREE.Quaternion(0.18064000926662085, -0.57787471184843, 0.016725948437496807, 0.7957072857654646)
                            },
                        ]
                    },
                    {
                        list: [
                            {
                                bone: bonesAn[3],
                                value: new THREE.Quaternion(-2.7755575615628914e-17, 5.551115123125783e-17, 0.63162163217242, 0.7752767981642739)
                            },
                            {
                                bone: bonesAn[0],
                                value: new THREE.Quaternion(-0.18442568058282224, 0.48682392459457846, -0.07060565314518653, -0.8508845254871504)
                            },
                        ]
                    },
                    {bone: bonesAn[3]},
                    {
                        list: [
                            {
                                bone: bonesAn[0],
                                value: new THREE.Quaternion(-0.33337136196114764, -0.49747483772336454, 0.6606411278339558, 0.45260776138612496)
                            },
                            {
                                bone: bonesAn[1],
                                value: new THREE.Quaternion(0.3310481974331674, 0.6081927481877184, -0.4532810026504598, -0.5613005906990813)
                            },
                        ], onComplete: function () {
                        par.currentHat.quaternion.copy(par.currentHat.defQuaternion);
                        par.currentHat.position.copy(par.currentHat.defPst);
                        headBone.add(par.currentHat);
                    }
                    },

                    {
                        bone: bonesAn[2],
                        value: new THREE.Quaternion(-0.01495854770728211, -0.014532487985261272, -0.1052911855771364, -0.9942227195903173)
                    },
                    {bone: bonesAn[0]},
                    {bone: bonesAn[1]},
                ]
                },
                {
                    name: "walking", keyFrames: [
                    {
                        list: [
                            {
                                bone: bonesAn[4],
                                value: new THREE.Quaternion(-0.2546807526090113, -0.9657016846512816, -0.000289558033627374, 0.05057563787846564)
                            },
                            {
                                bone: bonesAn[5],
                                value: new THREE.Quaternion(0.03950519188464485, -0.01769596846478244, -0.2564900053236798, 0.9655562583115082)
                            },
                            {
                                bone: bonesAn[6],
                                value: new THREE.Quaternion(0.055352837327738824, -0.46929942172653244, -0.12565941628905808, -0.8722980121584705)
                            },
                            {
                                bone: bonesAn[0],
                                value: new THREE.Quaternion(0.2987982373403675, -0.38159730151113314, 0.011876157174832341, 0.874621189922412)
                            },
                            {
                                bone: bonesAn[7],
                                value: new THREE.Quaternion(0.014108773192515744, 0.9962538715893068, -0.07369364769544612, 0.042993256679839886)
                            },
                        ]
                    },
//                    {bone:bonesAn[5], value:new THREE.Quaternion(0.02927482932726333,-0.012967484561695192,-0.13988165079302137,0.9896499323601008),duration:500},
                    {
                        list: [
                            {bone: bonesAn[4]},
                            {bone: bonesAn[5]},
                            {bone: bonesAn[6]},
                            {bone: bonesAn[0]},
                            {bone: bonesAn[7]},
                        ]
                    },
                    {
                        list: [
                            {
                                bone: bonesAn[7],
                                value: new THREE.Quaternion(0.2762361960832063, 0.9600240071773267, -0.0016700854459145431, 0.045218231025422995)
                            },
                            {
                                bone: bonesAn[8],
                                value: new THREE.Quaternion(0.00041736461998695407, 0.006131085785778881, -0.1598794629396793, 0.9871174335281743)
                            },
                            {
                                bone: bonesAn[0],
                                value: new THREE.Quaternion(-0.05921512265453845, -0.4746938490697332, 0.1711129742643864, 0.8613244129133236)
                            },
                            {
                                bone: bonesAn[6],
                                value: new THREE.Quaternion(0.3911287726075824, -0.3602497575135989, 0.03791167294807424, -0.8460502912090819)
                            },
                            {
                                bone: bonesAn[4],
                                value: new THREE.Quaternion(0.06062716749195843, -0.9968783155680123, 0.015567059663487814, 0.0481211558890883)
                            },
                        ]
                    },
//                    {bone:bonesAn[8], value:new THREE.Quaternion(0.02927482932726333,-0.012967484561695192,-0.13988165079302137,0.9896499323601008),duration:500},
                    {
                        list: [
                            {bone: bonesAn[7]},
                            {bone: bonesAn[8]},
                            {bone: bonesAn[0]},
                            {bone: bonesAn[6]},
                            {bone: bonesAn[4]},
                        ]
                    },
                ]
                },

                {
                    custom: "walking1",
                    name: "walking1",
                    keyFrames: [
                        {
                            "list": [
                                {
                                    "bone": {"name": "Base HumanLThigh"},
                                    "value": {
                                        "_x": -0.31227778083552815,
                                        "_y": -0.9486435669334682,
                                        "_z": -0.003329626747765768,
                                        "_w": 0.05046674723408551
                                    }
                                },
                                {
                                    "bone": {"name": "Base HumanLCalf"},
                                    "value": {
                                        "_x": -0.017401183533687803,
                                        "_y": -0.004264536444888056,
                                        "_z": 0.02953275754106305,
                                        "_w": 0.9994032628604788
                                    }
                                },
                                {
                                    "bone": {"name": "Base HumanLUpperarm"},
                                    "value": {
                                        "_x": 0.39987815503114066,
                                        "_y": -0.34032835795987226,
                                        "_z": -0.037805349251532505,
                                        "_w": 0.8502029061312508
                                    }
                                },
                                {
                                    "bone": {"name": "Base HumanLUpperarm"},
                                    "value": {
                                        "_x": 0.42598109571595527,
                                        "_y": -0.41783828070697504,
                                        "_z": -0.024740598314092616,
                                        "_w": 0.8020842636244202
                                    }
                                },
                                {
                                    "bone": {"name": "Base HumanRUpperarm"},
                                    "value": {
                                        "_x": 0.13342302646599258,
                                        "_y": -0.4840734904557474,
                                        "_z": -0.3819515731834153,
                                        "_w": -0.7758763613058558
                                    }
                                },
                                {
                                    "bone": {"name": "Base HumanRThigh"},
                                    "value": {
                                        "_x": -0.1534220823288469,
                                        "_y": 0.9871242044551557,
                                        "_z": 0.017514185533175353,
                                        "_w": 0.04172206737502304
                                    }
                                },
                                {
                                    "bone": {"name": "Base HumanLFoot"},
                                    "value": {
                                        "_x": -0.02485113984358034,
                                        "_y": -0.03678016837180437,
                                        "_z": 0.5929416283806385,
                                        "_w": 0.8040210646575676
                                    }
                                }
                            ]
                        },
                        {
                            "list": [
                                {
                                    "bone": {"name": "Base HumanRThigh"},
                                    "value": {
                                        "_x": 0.3109536067147225,
                                        "_y": 0.9493473467885384,
                                        "_z": -0.0033128116280599917,
                                        "_w": 0.04512762880522497
                                    }
                                },
                                {
                                    "bone": {"name": "Base HumanLThigh"},
                                    "value": {
                                        "_x": 0.1928589015089535,
                                        "_y": -0.9799221773099883,
                                        "_z": 0.02183751345865237,
                                        "_w": 0.045619096830161854
                                    }
                                },
                                {
                                    "bone": {"name": "Base HumanLCalf"},
                                    "value": {
                                        "_x": -0.012670194726673828,
                                        "_y": 0.007434108276732687,
                                        "_z": 0.2850187233630246,
                                        "_w": -0.9584093479852386
                                    }
                                },
                                {
                                    "bone": {"name": "Base HumanLFoot"},
                                    "value": {
                                        "_x": 0.03431914355064769,
                                        "_y": 0.028290249688470437,
                                        "_z": -0.7963340283729018,
                                        "_w": -0.603219624871774
                                    }
                                }, {
                                    "bone": {"name": "Base HumanRCalf"},
                                    "value": {
                                        "_x": -0.017228086311860805,
                                        "_y": 0.007474884624182519,
                                        "_z": -0.3628578177891447,
                                        "_w": 0.9316552769937645
                                    }
                                }, {
                                    "bone": {"name": "Base HumanLUpperarm"},
                                    "value": {
                                        "_x": 0.07988930186575952,
                                        "_y": -0.4833011067841636,
                                        "_z": 0.32161929520878896,
                                        "_w": 0.8103078651629734
                                    }
                                }, {
                                    "bone": {"name": "Base HumanRUpperarm"},
                                    "value": {
                                        "_x": 0.4133453562736441,
                                        "_y": -0.371367857166323,
                                        "_z": 0.21106163845586734,
                                        "_w": -0.8041669695064732
                                    }
                                }]
                        },
                        {
                            "list": [{
                                "bone": {"name": "Base HumanLThigh"},
                                "value": {
                                    "_x": -0.31227778083552815,
                                    "_y": -0.9486435669334682,
                                    "_z": -0.003329626747765768,
                                    "_w": 0.05046674723408551
                                }
                            }, {
                                "bone": {"name": "Base HumanLCalf"},
                                "value": {
                                    "_x": -0.017401183533687803,
                                    "_y": -0.004264536444888056,
                                    "_z": 0.02953275754106305,
                                    "_w": 0.9994032628604788
                                }
                            }, {
                                "bone": {"name": "Base HumanLUpperarm"},
                                "value": {
                                    "_x": 0.39987815503114066,
                                    "_y": -0.34032835795987226,
                                    "_z": -0.037805349251532505,
                                    "_w": 0.8502029061312508
                                }
                            }, {
                                "bone": {"name": "Base HumanLUpperarm"},
                                "value": {
                                    "_x": 0.42598109571595527,
                                    "_y": -0.41783828070697504,
                                    "_z": -0.024740598314092616,
                                    "_w": 0.8020842636244202
                                }
                            }, {
                                "bone": {"name": "Base HumanRUpperarm"},
                                "value": {
                                    "_x": 0.13342302646599258,
                                    "_y": -0.4840734904557474,
                                    "_z": -0.3819515731834153,
                                    "_w": -0.7758763613058558
                                }
                            }, {
                                "bone": {"name": "Base HumanRThigh"},
                                "value": {
                                    "_x": -0.1534220823288469,
                                    "_y": 0.9871242044551557,
                                    "_z": 0.017514185533175353,
                                    "_w": 0.04172206737502304
                                }
                            }, {
                                "bone": {"name": "Base HumanLFoot"},
                                "value": {
                                    "_x": -0.02485113984358034,
                                    "_y": -0.03678016837180437,
                                    "_z": 0.5929416283806385,
                                    "_w": 0.8040210646575676
                                }
                            }]
                        },
                        /*  {
                         "list": [{
                         "bone": {"name": "Base HumanRThigh"},
                         "value": {
                         "_x": 0.3109536067147225,
                         "_y": 0.9493473467885384,
                         "_z": -0.0033128116280599917,
                         "_w": 0.04512762880522497
                         }
                         }, {
                         "bone": {"name": "Base HumanLThigh"},
                         "value": {
                         "_x": 0.1928589015089535,
                         "_y": -0.9799221773099883,
                         "_z": 0.02183751345865237,
                         "_w": 0.045619096830161854
                         }
                         }, {
                         "bone": {"name": "Base HumanLCalf"},
                         "value": {
                         "_x": -0.012670194726673828,
                         "_y": 0.007434108276732687,
                         "_z": 0.2850187233630246,
                         "_w": -0.9584093479852386
                         }
                         }, {
                         "bone": {"name": "Base HumanLFoot"},
                         "value": {
                         "_x": 0.03431914355064769,
                         "_y": 0.028290249688470437,
                         "_z": -0.7963340283729018,
                         "_w": -0.603219624871774
                         }
                         }, {
                         "bone": {"name": "Base HumanRCalf"},
                         "value": {
                         "_x": -0.017228086311860805,
                         "_y": 0.007474884624182519,
                         "_z": -0.3628578177891447,
                         "_w": 0.9316552769937645
                         }
                         }, {
                         "bone": {"name": "Base HumanLUpperarm"},
                         "value": {
                         "_x": 0.07988930186575952,
                         "_y": -0.4833011067841636,
                         "_z": 0.32161929520878896,
                         "_w": 0.8103078651629734
                         }
                         }, {
                         "bone": {"name": "Base HumanRUpperarm"},
                         "value": {
                         "_x": 0.4133453562736441,
                         "_y": -0.371367857166323,
                         "_z": 0.21106163845586734,
                         "_w": -0.8041669695064732
                         }
                         }]
                         },*/
                        {
                            "list": [
                                {
                                    "bone": {"name": "Base HumanRFoot"},
                                    "value": {
                                        "_x": 0.02428494892928746,
                                        "_y": 0.030633617145352867,
                                        "_z": 0.6759176363077778,
                                        "_w": 0.7359396522026791
                                    }
                                }, {
                                    "bone": {"name": "Base HumanRCalf"},
                                    "value": {
                                        "_x": 0.005753347184347264,
                                        "_y": 0.005670703765607631,
                                        "_z": -0.09705482175631772,
                                        "_w": 0.995246252788137
                                    }
                                }, {
                                    "bone": {"name": "Base HumanRThigh"},
                                    "value": {
                                        "_x": -0.02591576458654813,
                                        "_y": -0.9986395223274775,
                                        "_z": -0.009755774896335943,
                                        "_w": -0.04418486672622118
                                    }
                                }, {
                                    "bone": {"name": "Base HumanLFoot"},
                                    "value": {
                                        "_x": -0.02809971859952018,
                                        "_y": -0.034397308190313225,
                                        "_z": 0.6632585203458383,
                                        "_w": 0.7470711921848797
                                    }
                                }, {
                                    "bone": {"name": "Base HumanLCalf"},
                                    "value": {
                                        "_x": -0.0057612469792171885,
                                        "_y": -0.005566377250096106,
                                        "_z": -0.09409804660573891,
                                        "_w": 0.995530703244525
                                    }
                                }, {
                                    "bone": {"name": "Base HumanLThigh"},
                                    "value": {
                                        "_x": 0.03973476672983241,
                                        "_y": 0.997929441061629,
                                        "_z": -0.01065856974205627,
                                        "_w": -0.049440609486578
                                    }
                                }, {
                                    "bone": {"name": "Base HumanLUpperarm"},
                                    "value": {
                                        "_x": 0.19652851512278108,
                                        "_y": -0.4161484038686483,
                                        "_z": 0.059871855154480735,
                                        "_w": 0.8857835004455502
                                    }
                                }, {
                                    "bone": {"name": "Base HumanRUpperarm"},
                                    "value": {
                                        "_x": -0.199162975422524,
                                        "_y": 0.4318614772356297,
                                        "_z": 0.05850588133283463,
                                        "_w": 0.8777282241959496
                                    }
                                }]
                        }
                    ]
                },
                {
                    custom: "test",
                    name: "test",
                    keyFrames: [
                        {

                            "list": [
                                {
                                    "bone": {"name": "Base HumanLUpperarm"},
                                    "transform": {
                                        "pst": {"x": 79.18132, "y": 0.000015, "z": -0.000061},
                                        "rotation": {
                                            "_x": -0.25831386549675184,
                                            "_y": 0.4406041649094846,
                                            "_z": -0.028244063614127485,
                                            "_w": -0.8592695622023496
                                        }
                                    }
                                },
                                {
                                    "bone": {"name": "Base HumanRUpperarm"},
                                    "transform": {
                                        "pst": {"x": 79.181328, "y": -0.000015, "z": -0.000031},
                                        "rotation": {
                                            "_x": -0.2784807348694877,
                                            "_y": 0.48774978167760197,
                                            "_z": 0.012535498893259708,
                                            "_w": 0.8272795748954558
                                        }
                                    }
                                },
                                {
                                    "bone": {"name": "Base HumanLThigh"},
                                    "transform": {
                                        "pst": {"x": 4.6465, "y": 12.669163, "z": 42.931786},
                                        "rotation": {
                                            "_x": 0.43984156479535663,
                                            "_y": 0.8964400356206488,
                                            "_z": 0.01008419072325131,
                                            "_w": -0.053225647991964165
                                        }
                                    }
                                },
                                {
                                    "bone": {"name": "Base HumanLCalf"},
                                    "transform": {
                                        "pst": {"x": 122.357681, "y": 0.000015, "z": -0.000001},
                                        "rotation": {
                                            "_x": -0.07033419500498003,
                                            "_y": 0.01860139204013468,
                                            "_z": 0.8347221060961867,
                                            "_w": -0.5458443877869569
                                        }
                                    }
                                },
                                {
                                    "bone": {"name": "Base HumanLFoot"},
                                    "transform": {
                                        "pst": {"x": 124.28595, "y": 0, "z": -0.000001},
                                        "rotation": {
                                            "_x": -0.03437228721946274,
                                            "_y": -0.024731330403655962,
                                            "_z": 0.8262738470980792,
                                            "_w": 0.5616746709929961
                                        }
                                    }
                                },
                                {
                                    "bone": {"name": "Base HumanRThigh"},
                                    "transform": {
                                        "pst": {"x": 4.6465, "y": 12.669163, "z": -42.931786},
                                        "rotation": {
                                            "_x": 0.434163967197366,
                                            "_y": 0.8998728947506491,
                                            "_z": -0.009380131237590938,
                                            "_w": 0.04052697938713356
                                        }
                                    }
                                },
                                {
                                    "bone": {"name": "Base HumanRCalf"},
                                    "transform": {
                                        "pst": {"x": 122.357689, "y": 0.000014, "z": 0.000015},
                                        "rotation": {
                                            "_x": 0.05971550704694128,
                                            "_y": -0.0023711542124962084,
                                            "_z": 0.8173436450678213,
                                            "_w": -0.5730425825761489
                                        }
                                    }
                                },
                                {
                                    "bone": {"name": "Base HumanRFoot"},
                                    "transform": {
                                        "pst": {"x": 124.285934, "y": -0.000002, "z": 0},
                                        "rotation": {
                                            "_x": 0.03199771663427118,
                                            "_y": 0.025924913258221015,
                                            "_z": 0.8307388908512002,
                                            "_w": 0.5551368661903825
                                        }
                                    }
                                },
                                {
                                    "bone": {"name": ""},
                                    "transform": {
                                        "pst": {"x": 0, "y": -660.5049957498909, "z": 0},
                                        "rotation": {
                                            "_x": 0,
                                            "_y": 0.7038589186376472,
                                            "_z": 0,
                                            "_w": 0.7103397937988847
                                        }
                                    }
                                },
                                {
                                    "bone": {"name": "Base HumanSpine1"},
                                    "transform": {
                                        "pst": {"x": 12.334503, "y": -0.943722, "z": 0},
                                        "rotation": {
                                            "_x": 0.00009122726887632153,
                                            "_y": 0.0009608445321360745,
                                            "_z": -0.20224364139032341,
                                            "_w": -0.9793347629756398
                                        }
                                    }
                                }
                            ]
                        },
                        {
                            onMiddle: (keys)=> {
                                if (keys.length)self.startTween(keys);
                            },
                            "list": [{
                                "bone": {"name": ""},
                                "transform": {
                                    "pst": {"x": 3600.675800958176, "y": 1515.2209692751148, "z": 0},
                                    "rotation": {"_x": 0, "_y": 0.7038589186376472, "_z": 0, "_w": 0.7103397937988847}
                                }
                            }, {
                                "bone": {"name": "Base HumanRUpperarm"},
                                "transform": {
                                    "pst": {"x": 79.181328, "y": -0.000015, "z": -0.000031},
                                    "rotation": {
                                        "_x": 0.2730583744100119,
                                        "_y": -0.34823679956630404,
                                        "_z": -0.11066311427262476,
                                        "_w": -0.8899010995726939
                                    }
                                }
                            }, {
                                "bone": {"name": "Base HumanLUpperarm"},
                                "transform": {
                                    "pst": {"x": 79.18132, "y": 0.000015, "z": -0.000061},
                                    "rotation": {
                                        "_x": 0.24268104216361586,
                                        "_y": -0.31536575197615385,
                                        "_z": 0.09104981918755063,
                                        "_w": 0.9128856835419898
                                    }
                                }
                            }, {
                                "bone": {"name": "Base HumanSpine1"},
                                "transform": {
                                    "pst": {"x": 12.334503, "y": -0.943722, "z": 0},
                                    "rotation": {
                                        "_x": 0.00006122985939989618,
                                        "_y": 0.0006448984291779689,
                                        "_z": -0.1680843149206201,
                                        "_w": -0.9857724095525923
                                    }
                                }
                            }, {
                                "bone": {"name": "Base HumanLThigh"},
                                "transform": {
                                    "pst": {"x": 4.6465, "y": 12.669163, "z": 42.931786},
                                    "rotation": {
                                        "_x": -0.02918844624932359,
                                        "_y": 0.9983244717156678,
                                        "_z": -0.01401618007093992,
                                        "_w": -0.04795655253137031
                                    }
                                }
                            }, {
                                "bone": {"name": "Base HumanLCalf"},
                                "transform": {
                                    "pst": {"x": 122.357681, "y": 0.000015, "z": -0.000001},
                                    "rotation": {
                                        "_x": -0.003988985087990216,
                                        "_y": -0.0058992505752623325,
                                        "_z": -0.11234709614891221,
                                        "_w": 0.9936435053029511
                                    }
                                }
                            }, {
                                "bone": {"name": "Base HumanLFoot"},
                                "transform": {
                                    "pst": {"x": 124.28595, "y": 0, "z": -0.000001},
                                    "rotation": {
                                        "_x": -0.0272792709107745,
                                        "_y": -0.035407823445442986,
                                        "_z": 0.6431964676452616,
                                        "_w": 0.764395468761655
                                    }
                                }
                            }, {
                                "bone": {"name": "Base HumanRThigh"},
                                "transform": {
                                    "pst": {"x": 4.6465, "y": 12.669163, "z": -42.931786},
                                    "rotation": {
                                        "_x": -0.0651169251899729,
                                        "_y": 0.9968144735364844,
                                        "_z": 0.01376243415092632,
                                        "_w": 0.043946410740969444
                                    }
                                }
                            }, {
                                "bone": {"name": "Base HumanRCalf"},
                                "transform": {
                                    "pst": {"x": 122.357689, "y": 0.000014, "z": 0.000015},
                                    "rotation": {
                                        "_x": 0.006309488336666131,
                                        "_y": 0.0056746298790698,
                                        "_z": -0.0902710514636649,
                                        "_w": 0.9958810803815743
                                    }
                                }
                            }, {
                                "bone": {"name": "Base HumanRFoot"},
                                "transform": {
                                    "pst": {"x": 124.285934, "y": -0.000002, "z": 0},
                                    "rotation": {
                                        "_x": 0.023919541991694184,
                                        "_y": 0.030876359206043546,
                                        "_z": 0.6702446547556683,
                                        "_w": 0.7411117380389706
                                    }
                                }
                            }]
                        },
                        {
                            "list": [{
                                "bone": {"name": "Base HumanSpine1"},
                                "transform": {
                                    "pst": {"x": 12.334503, "y": -0.943722, "z": 0},
                                    "rotation": {
                                        "_x": 0.00016188663770480322,
                                        "_y": 0.0017050572743109692,
                                        "_z": -0.2822309324892805,
                                        "_w": -0.9593449678396937
                                    }
                                }
                            }, {
                                "bone": {"name": "Base HumanLThigh"},
                                "transform": {
                                    "pst": {"x": 4.6465, "y": 12.669163, "z": 42.931786},
                                    "rotation": {
                                        "_x": 0.37896470757079115,
                                        "_y": 0.9238539537541988,
                                        "_z": 0.006777055862779359,
                                        "_w": -0.053232454936001754
                                    }
                                }
                            }, {
                                "bone": {"name": "Base HumanLCalf"},
                                "transform": {
                                    "pst": {"x": 122.357681, "y": 0.000015, "z": -0.000001},
                                    "rotation": {
                                        "_x": 0.0573114531941324,
                                        "_y": -0.016839636876981597,
                                        "_z": -0.7188003460512523,
                                        "_w": 0.6926455682534136
                                    }
                                }
                            }, {
                                "bone": {"name": "Base HumanLFoot"},
                                "transform": {
                                    "pst": {"x": 124.28595, "y": 0, "z": -0.000001},
                                    "rotation": {
                                        "_x": -0.033299915840934405,
                                        "_y": -0.026765038770529777,
                                        "_z": 0.7982605740185557,
                                        "_w": 0.6007951425293196
                                    }
                                }
                            }, {
                                "bone": {"name": "Base HumanRThigh"},
                                "transform": {
                                    "pst": {"x": 4.6465, "y": 12.669163, "z": -42.931786},
                                    "rotation": {
                                        "_x": 0.35792618454156233,
                                        "_y": 0.9327944681512771,
                                        "_z": -0.005648545932246039,
                                        "_w": 0.04184997721844308
                                    }
                                }
                            }, {
                                "bone": {"name": "Base HumanRCalf"},
                                "transform": {
                                    "pst": {"x": 122.357689, "y": 0.000014, "z": 0.000015},
                                    "rotation": {
                                        "_x": -0.04798435594391873,
                                        "_y": 0.0033241561561899655,
                                        "_z": -0.6990706052187493,
                                        "_w": 0.7134330665373471
                                    }
                                }
                            }, {
                                "bone": {"name": "Base HumanRFoot"},
                                "transform": {
                                    "pst": {"x": 124.285934, "y": -0.000002, "z": 0},
                                    "rotation": {
                                        "_x": 0.030867465753670463,
                                        "_y": 0.02679904525164021,
                                        "_z": 0.8090607435975369,
                                        "_w": 0.586301734620654
                                    }
                                }
                            }, {
                                "bone": {"name": "Base HumanLUpperarm"},
                                "transform": {
                                    "pst": {"x": 79.18132, "y": 0.000015, "z": -0.000061},
                                    "rotation": {
                                        "_x": -0.2775810727046656,
                                        "_y": 0.3888021641359283,
                                        "_z": -0.18279391712804127,
                                        "_w": -0.8592834237286391
                                    }
                                }
                            }, {
                                "bone": {"name": "Base HumanRUpperarm"},
                                "transform": {
                                    "pst": {"x": 79.181328, "y": -0.000015, "z": -0.000031},
                                    "rotation": {
                                        "_x": -0.3097485286010475,
                                        "_y": 0.4501778916309219,
                                        "_z": 0.191522908266409,
                                        "_w": 0.8153003873731175
                                    }
                                }
                            }, {
                                "bone": {"name": ""},
                                "transform": {
                                    "pst": {"x": 5995.3545533587, "y": -447.59016343351027, "z": 0},
                                    "rotation": {"_x": 0, "_y": 0.7038589186376472, "_z": 0, "_w": 0.7103397937988847}
                                }
                            }]
                        },
                        {
                            "list": [{
                                "bone": {"name": ""},
                                "transform": {
                                    "pst": {"x": 5995.3545533587, "y": 25.430142891583728, "z": 0},
                                    "rotation": {"_x": 0, "_y": 0.7038589186376472, "_z": 0, "_w": 0.7103397937988847}
                                }
                            }, {
                                "bone": {"name": "Base HumanRUpperarm"},
                                "transform": {
                                    "pst": {"x": 79.181328, "y": -0.000015, "z": -0.000031},
                                    "rotation": {
                                        "_x": -0.2698229743498203,
                                        "_y": 0.4101265967556985,
                                        "_z": 0.12747217848074346,
                                        "_w": 0.861825162288814
                                    }
                                }
                            }, {
                                "bone": {"name": "Base HumanLThigh"},
                                "transform": {
                                    "pst": {"x": 4.6465, "y": 12.669163, "z": 42.931786},
                                    "rotation": {
                                        "_x": 0.09469273212059776,
                                        "_y": 0.9941953301567793,
                                        "_z": -0.007938198161403634,
                                        "_w": -0.05045708161536855
                                    }
                                }
                            }, {
                                "bone": {"name": "Base HumanLCalf"},
                                "transform": {
                                    "pst": {"x": 122.357681, "y": 0.000015, "z": -0.000001},
                                    "rotation": {
                                        "_x": -0.0047508988120166795,
                                        "_y": 0.00765157837825968,
                                        "_z": 0.20323211266253913,
                                        "_w": -0.9790891638972592
                                    }
                                }
                            }, {
                                "bone": {"name": "Base HumanLFoot"},
                                "transform": {
                                    "pst": {"x": 124.28595, "y": 0, "z": -0.000001},
                                    "rotation": {
                                        "_x": -0.02936566452356589,
                                        "_y": -0.032828982925372646,
                                        "_z": 0.6966005998192594,
                                        "_w": 0.7161058026484348
                                    }
                                }
                            }, {
                                "bone": {"name": "Base HumanRThigh"},
                                "transform": {
                                    "pst": {"x": 4.6465, "y": 12.669163, "z": -42.931786},
                                    "rotation": {
                                        "_x": 0.07569314891609603,
                                        "_y": 0.9961243872630522,
                                        "_z": 0.007526593307318728,
                                        "_w": 0.044159969099603825
                                    }
                                }
                            }, {
                                "bone": {"name": "Base HumanRCalf"},
                                "transform": {
                                    "pst": {"x": 122.357689, "y": 0.000014, "z": 0.000015},
                                    "rotation": {
                                        "_x": -0.0032586390106185206,
                                        "_y": 0.005445673478419795,
                                        "_z": -0.2030822698964854,
                                        "_w": 0.97914111235637
                                    }
                                }
                            }, {
                                "bone": {"name": "Base HumanRFoot"},
                                "transform": {
                                    "pst": {"x": 124.285934, "y": -0.000002, "z": 0},
                                    "rotation": {
                                        "_x": 0.02673048025575047,
                                        "_y": 0.029458784863200856,
                                        "_z": 0.7273999266528455,
                                        "_w": 0.6850598569618552
                                    }
                                }
                            }, {
                                "bone": {"name": "Base HumanSpine1"},
                                "transform": {
                                    "pst": {"x": 12.334503, "y": -0.943722, "z": 0},
                                    "rotation": {
                                        "_x": 0.0000260142173448899,
                                        "_y": 0.0002739901036946041,
                                        "_z": -0.12783155281604425,
                                        "_w": -0.9917958551829753
                                    }
                                }
                            }]
                        },
                        {
                            "list": [{
                                "bone": {"name": ""},
                                "transform": {
                                    "pst": {
                                        "x": 5995.3545533587,
                                        "y": 25.430142891583728,
                                        "z": 353.84745803611395
                                    },
                                    "rotation": {"_x": 0, "_y": -0.7004802382588786, "_z": 0, "_w": 0.7136717983840924}
                                }
                            }]
                        },
                        {
                            "list": [{
                                "bone": {"name": "Base HumanLThigh"},
                                "transform": {
                                    "pst": {"x": 4.6465, "y": 12.669163, "z": 42.931786},
                                    "rotation": {
                                        "_x": 0.3702967344749504,
                                        "_y": 0.9278487120482725,
                                        "_z": 0.006707078040278003,
                                        "_w": -0.04395578611060011
                                    }
                                }
                            }, {
                                "bone": {"name": "Base HumanLCalf"},
                                "transform": {
                                    "pst": {"x": 122.357681, "y": 0.000015, "z": -0.000001},
                                    "rotation": {
                                        "_x": 0.03228328803246148,
                                        "_y": -0.004413340880515981,
                                        "_z": -0.31292818381717397,
                                        "_w": 0.9492177116205068
                                    }
                                }
                            }, {
                                "bone": {"name": "Base HumanLFoot"},
                                "transform": {
                                    "pst": {"x": 124.28595, "y": 0, "z": -0.000001},
                                    "rotation": {
                                        "_x": 0.025698261341844435,
                                        "_y": 0.037605127348005744,
                                        "_z": -0.6052721260327204,
                                        "_w": -0.794714482223578
                                    }
                                }
                            }, {
                                "bone": {"name": "Base HumanRThigh"},
                                "transform": {
                                    "pst": {"x": 4.6465, "y": 12.669163, "z": -42.931786},
                                    "rotation": {
                                        "_x": -0.10785810564959236,
                                        "_y": 0.9932406335996808,
                                        "_z": 0.015504318457182581,
                                        "_w": 0.03999111546896565
                                    }
                                }
                            }, {
                                "bone": {"name": "Base HumanRCalf"},
                                "transform": {
                                    "pst": {"x": 122.357689, "y": 0.000014, "z": 0.000015},
                                    "rotation": {
                                        "_x": 0.005753754618569534,
                                        "_y": 0.005663327183809574,
                                        "_z": -0.09688270692766833,
                                        "_w": 0.9952630617738036
                                    }
                                }
                            }, {
                                "bone": {"name": "Base HumanRCalf"},
                                "transform": {
                                    "pst": {"x": 122.357689, "y": 0.000014, "z": 0.000015},
                                    "rotation": {
                                        "_x": 0.005753754618569534,
                                        "_y": 0.005663327183809574,
                                        "_z": -0.09688270692766833,
                                        "_w": 0.9952630617738036
                                    }
                                }
                            }, {
                                "bone": {"name": "Base HumanRFoot"},
                                "transform": {
                                    "pst": {"x": 124.285934, "y": -0.000002, "z": 0},
                                    "rotation": {
                                        "_x": 0.025646153220614032,
                                        "_y": 0.027639616389746297,
                                        "_z": 0.7299397355466596,
                                        "_w": 0.6824707384248373
                                    }
                                }
                            }, {
                                "bone": {"name": "Base HumanLUpperarm"},
                                "transform": {
                                    "pst": {"x": 79.18132, "y": 0.000015, "z": -0.000061},
                                    "rotation": {
                                        "_x": 0.2724067385849537,
                                        "_y": -0.5190923511399942,
                                        "_z": 0.03105697730443019,
                                        "_w": 0.8095512050422032
                                    }
                                }
                            }, {
                                "bone": {"name": "Base HumanRUpperarm"},
                                "transform": {
                                    "pst": {"x": 79.181328, "y": -0.000015, "z": -0.000031},
                                    "rotation": {
                                        "_x": -0.2383575198421337,
                                        "_y": 0.4535141042450982,
                                        "_z": 0.27601963861302187,
                                        "_w": 0.8132181800673492
                                    }
                                }
                            }, {
                                "bone": {"name": ""},
                                "transform": {
                                    "pst": {
                                        "x": 5337.427814090914,
                                        "y": 25.430142891583728,
                                        "z": 353.84745803611395
                                    },
                                    "rotation": {"_x": 0, "_y": -0.7004802382588786, "_z": 0, "_w": 0.7136717983840924}
                                }
                            }]
                        },
                        {
                            "list": [{
                                "bone": {"name": "Base HumanLUpperarm"},
                                "transform": {
                                    "pst": {"x": 79.18132, "y": 0.000015, "z": -0.000061},
                                    "rotation": {
                                        "_x": 0.12120804000695007,
                                        "_y": -0.5629715771841216,
                                        "_z": 0.12809107393857228,
                                        "_w": 0.8074430495888619
                                    }
                                }
                            }, {
                                "bone": {"name": ""},
                                "transform": {
                                    "pst": {
                                        "x": 3692.7270448208637,
                                        "y": 25.430142891583728,
                                        "z": 353.84745803611395
                                    },
                                    "rotation": {"_x": 0, "_y": -0.7004802382588786, "_z": 0, "_w": 0.7136717983840924}
                                }
                            }, {
                                "bone": {"name": "Base HumanRUpperarm"},
                                "transform": {
                                    "pst": {"x": 79.181328, "y": -0.000015, "z": -0.000031},
                                    "rotation": {
                                        "_x": 0.39206279389495186,
                                        "_y": -0.44166044026010565,
                                        "_z": -0.19063107413533675,
                                        "_w": -0.7841445371878357
                                    }
                                }
                            }, {
                                "bone": {"name": "Base HumanLThigh"},
                                "transform": {
                                    "pst": {"x": 4.6465, "y": 12.669163, "z": 42.931786},
                                    "rotation": {
                                        "_x": 0.13010397702154408,
                                        "_y": -0.9900523416717693,
                                        "_z": 0.01902503273507039,
                                        "_w": 0.050073586704172154
                                    }
                                }
                            }, {
                                "bone": {"name": "Base HumanLCalf"},
                                "transform": {
                                    "pst": {"x": 122.357681, "y": 0.000015, "z": -0.000001},
                                    "rotation": {
                                        "_x": -0.011946521649856962,
                                        "_y": 0.002757120822677067,
                                        "_z": 0.10453588869177743,
                                        "_w": -0.9944455374054095
                                    }
                                }
                            }, {
                                "bone": {"name": "Base HumanLFoot"},
                                "transform": {
                                    "pst": {"x": 124.28595, "y": 0, "z": -0.000001},
                                    "rotation": {
                                        "_x": -0.0311326229131223,
                                        "_y": -0.029731804074417625,
                                        "_z": 0.7386542939895941,
                                        "_w": 0.6727084161316577
                                    }
                                }
                            }, {
                                "bone": {"name": "Base HumanRThigh"},
                                "transform": {
                                    "pst": {"x": 4.6465, "y": 12.669163, "z": -42.931786},
                                    "rotation": {
                                        "_x": 0.4028180495946586,
                                        "_y": 0.9137905436074176,
                                        "_z": -0.007530710730803809,
                                        "_w": 0.051650264809882454
                                    }
                                }
                            }, {
                                "bone": {"name": "Base HumanRCalf"},
                                "transform": {
                                    "pst": {"x": 122.357689, "y": 0.000014, "z": 0.000015},
                                    "rotation": {
                                        "_x": 0.01864186748863841,
                                        "_y": -0.012877765334544886,
                                        "_z": 0.37610043666930826,
                                        "_w": -0.9263018436636479
                                    }
                                }
                            }, {
                                "bone": {"name": "Base HumanRFoot"},
                                "transform": {
                                    "pst": {"x": 124.285934, "y": -0.000002, "z": 0},
                                    "rotation": {
                                        "_x": -0.022839971189267096,
                                        "_y": -0.03323085144112598,
                                        "_z": -0.6269416371380205,
                                        "_w": -0.7780219981220594
                                    }
                                }
                            }]
                        },
                        {
                            "list": [{
                                "bone": {"name": "Base HumanRUpperarm"},
                                "transform": {
                                    "pst": {"x": 79.181328, "y": -0.000015, "z": -0.000031},
                                    "rotation": {
                                        "_x": 0.20058016800781409,
                                        "_y": -0.45420755647494226,
                                        "_z": -0.2950847611865135,
                                        "_w": -0.8163259830978271
                                    }
                                }
                            }, {
                                "bone": {"name": ""},
                                "transform": {
                                    "pst": {
                                        "x": 1319.5867037544035,
                                        "y": 25.430142891583728,
                                        "z": 353.84745803611395
                                    },
                                    "rotation": {"_x": 0, "_y": -0.7004802382588786, "_z": 0, "_w": 0.7136717983840924}
                                }
                            }, {
                                "bone": {"name": "Base HumanLThigh"},
                                "transform": {
                                    "pst": {"x": 4.6465, "y": 12.669163, "z": 42.931786},
                                    "rotation": {
                                        "_x": 0.3362774579380146,
                                        "_y": 0.9406842755718261,
                                        "_z": 0.004848695780646159,
                                        "_w": -0.04480016969593026
                                    }
                                }
                            }, {
                                "bone": {"name": "Base HumanLCalf"},
                                "transform": {
                                    "pst": {"x": 122.357681, "y": 0.000015, "z": -0.000001},
                                    "rotation": {
                                        "_x": -0.02598931247815167,
                                        "_y": 0.003909671787768713,
                                        "_z": 0.248344096177482,
                                        "_w": -0.9683152791024705
                                    }
                                }
                            }, {
                                "bone": {"name": "Base HumanLFoot"},
                                "transform": {
                                    "pst": {"x": 124.28595, "y": 0, "z": -0.000001},
                                    "rotation": {
                                        "_x": 0.026222531412569697,
                                        "_y": 0.03694619589637671,
                                        "_z": -0.6181052948663203,
                                        "_w": -0.7847886356746289
                                    }
                                }
                            }, {
                                "bone": {"name": "Base HumanRThigh"},
                                "transform": {
                                    "pst": {"x": 4.6465, "y": 12.669163, "z": -42.931786},
                                    "rotation": {
                                        "_x": -0.06405025535528791,
                                        "_y": 0.9969921069498472,
                                        "_z": 0.01364342281691139,
                                        "_w": 0.04145070450886963
                                    }
                                }
                            }, {
                                "bone": {"name": "Base HumanRCalf"},
                                "transform": {
                                    "pst": {"x": 122.357689, "y": 0.000014, "z": 0.000015},
                                    "rotation": {
                                        "_x": 0.004067148243174381,
                                        "_y": 0.006182056408245859,
                                        "_z": -0.11662749026067915,
                                        "_w": 0.9931481603961008
                                    }
                                }
                            }, {
                                "bone": {"name": "Base HumanRFoot"},
                                "transform": {
                                    "pst": {"x": 124.285934, "y": -0.000002, "z": 0},
                                    "rotation": {
                                        "_x": 0.025527706518664775,
                                        "_y": 0.027909917359005623,
                                        "_z": 0.7255003386339263,
                                        "_w": 0.687181658089162
                                    }
                                }
                            }, {
                                "bone": {"name": "Base HumanLUpperarm"},
                                "transform": {
                                    "pst": {"x": 79.18132, "y": 0.000015, "z": -0.000061},
                                    "rotation": {
                                        "_x": 0.29367870086783426,
                                        "_y": -0.5112113989449112,
                                        "_z": 0.016817612083315003,
                                        "_w": 0.8075474539265335
                                    }
                                }
                            }]
                        },
                        {
                            "list": [{
                                "bone": {"name": ""},
                                "transform": {
                                    "pst": {
                                        "x": 677.417516365661,
                                        "y": 25.430142891583728,
                                        "z": 353.84745803611395
                                    },
                                    "rotation": {
                                        "_x": 0,
                                        "_y": -0.003271134583962665,
                                        "_z": 0,
                                        "_w": 0.9999946498249546
                                    }
                                }
                            }, {"bone": {"name": "Base HumanLThigh"}}, {"bone": {"name": "Base HumanLCalf"}}, {"bone": {"name": "Base HumanLFoot"}}, {"bone": {"name": "Base HumanRThigh"}}, {"bone": {"name": "Base HumanRCalf"}}, {"bone": {"name": "Base HumanRFoot"}}, {"bone": {"name": "Base HumanSpine1"}}, {"bone": {"name": "Base HumanLUpperarm"}}, {"bone": {"name": "Base HumanRUpperarm"}}]
                        }
                    ]
                },
            ];
            let distance = 6000,
                vectorWaikilng = new THREE.Vector3(1, 0, 0.0),
                robot = dae,//.children[0],
                endTo = robot.position.clone(),
                startWailkingFrom = endTo.clone().addScaledVector(vectorWaikilng, distance + 1000);
            animationsKeys.forEach(function (el) {
                if (el.custom) {
                    let lastInd = el.keyFrames.length - 1;
                    el.keyFrames.forEach(function (key, index) {

                        if (key.list) {
                            key.list.forEach(function (keyChild) {
                                //if (!keyChild.value)console.log(key);
                                if (keyChild.value) {
                                    keyChild.value = new THREE.Quaternion(keyChild.value._x, keyChild.value._y, keyChild.value._z, keyChild.value._w);
                                } else if (keyChild.transform) {
                                    keyChild.transform.rotation = new THREE.Quaternion(keyChild.transform.rotation._x, keyChild.transform.rotation._y, keyChild.transform.rotation._z, keyChild.transform.rotation._w);
                                    keyChild.transform.pst = new THREE.Vector3(keyChild.transform.pst.x, keyChild.transform.pst.y, keyChild.transform.pst.z);
                                }

                                for (var isd = 0; isd < bonesAn.length; isd++) {
                                    if (keyChild.bone.name == bonesAn[isd].name) {
                                        return keyChild.bone.obj = bonesAn[isd].obj;
                                    }
                                }
                                keyChild.bone.obj = robot;
                            });

                            if (el.custom == "walking1") {
                                let ress = distance - distance * (index) / lastInd;
                                key.list.push({
                                    elem: dae,
                                    position: endTo.clone().addScaledVector(vectorWaikilng, ress)
                                })
                            }

                        } else {
                            if (key.value) {
                                key.value = new THREE.Quaternion(key.value._x, key.value._y, key.value._z, key.value._w);
                            } else if (keyChild.transform) {
                                key.transform.rotation = new THREE.Quaternion(key.transform.rotation._x, key.transform.rotation._y, key.transform.rotation._z, key.transform.rotation._w);
                                key.transform.pst = new THREE.Vector3(key.transform.pst.x, key.transform.pst.y, key.transform.pst.z);
                            }
                            for (var isd = 0; isd < bonesAn.length; isd++) {
                                if (key.bone.name == bonesAn[isd].name) {
                                    return key.bone.obj = bonesAn[isd].obj;
                                }
                            }
                            keyChild.bone.obj = robot;
                        }
                        if (index == 0) {
                            key.onStart = ()=> {

                                if (!robot.defQuaternion)robot.defQuaternion = robot.quaternion.clone();
                                if (el.custom == "walking1") {
                                    robot.quaternion.setFromAxisAngle(new THREE.Vector3(0, -1, 0), Math.PI / 2);
                                    robot.position.copy(startWailkingFrom);
                                }

                                let cameraPstEnd = new THREE.Vector3(-6125.0024990072025, 6984.93660089785, 12511.915664146385),
                                    startF = self.camera.position.clone(),
                                    tween = new TWEEN.Tween(startF).to(cameraPstEnd, 1100 * el.keyFrames.length).easing(TWEEN.Easing.Quadratic.In).onStart(function () {
                                        self.controls.enabled = false;
                                    }).onUpdate(function (delta) {
                                        self.camera.position.copy(startF);
                                        self.camera.lookAt(self.controls.target);
                                        self.camera.updateProjectionMatrix();
                                    }).onComplete(function () {
                                        self.controls.enabled = true;
                                    }).start();
                            }
                        } else if (index == lastInd) {
                            if (el.custom == "walking1")el.keyFrames.push({bone: {obj: robot}});
                        }
                    })
                }
            });
        };

        this.isFinish = true;
        let container = self.container = document.createElement('div');
        container.className = 'viewer';
        document.body.appendChild(container);
        this.preloader = new Preloader(this);
        var loadingManager = new THREE.LoadingManager(function () {
            console.log("done");
        }, (e)=>this.onProgress(e), this.onError);
        let loader = new THREE.ColladaLoader(loadingManager);
        loader.options.convertUpAxis = true;

        THREE.Loader.Handlers.add(/\.dds$/i, new THREE.DDSLoader());

        this.mGui = new MGui(this);
        this.loadedModels = new THREE.Object3D();
        this.onLoadOBJ('assets/models/stage/stage1/Stage_2.obj', (o)=> {
            this.loadedModels.add(o);
            //o.material.bumpScale = 10
            o.position.set(100, -700, -800);
            o.rotation.x = -Math.PI / 2;
            o.scale.multiplyScalar(29);
            o.traverse((m)=> {
                if (m.type == 'Mesh') {
                    m.receiveShadow = true;
                    m.material.side = THREE.DoubleSide;
                }
            });
            loader.load('./assets/models/' + model + '.DAE', (collada) => {
                dae = collada.scene;
                this.loadedModels.add(dae);
                dae.traverse(function (child) {

                    if (child instanceof THREE.Mesh) {

                        child.geometry.computeFaceNormals();
                        child.material.shading = THREE.FlatShading;
                        child.material.side = THREE.DoubleSide;

                    }

                });

                dae.scale.x = dae.scale.y = dae.scale.z = 10.0;
                dae.updateMatrix();

                kinematics = collada.kinematics;

                init();

            }, (e)=>this.onProgress(e), this.onError);
        }, 1)
    }

    checkIfHandCanHoldTheHat(hand, hotPoint) {
        this.scene.updateMatrixWorld();
        let v1 = new THREE.Vector3(),
            v2 = v1.clone();
        v1.setFromMatrixPosition(hand.pointer.matrixWorld);
        v2.setFromMatrixPosition(hotPoint.matrixWorld);
        //console.log(v2.distanceTo(v1), hotPoint.radius);
        return v2.distanceTo(v1) <= hotPoint.radius;
    }

    selectHat(val, onFinish, isF) {
        let self = this,
            par = self.par,
            value = val || 0;
        par.reset();
        if (par.currentHat) {
            let _parent = par.currentHat.parent;
            _parent.remove(par.currentHat);
            _parent.add(par.hats[value]);
        } else {
            this.bonesAn[2].obj.add(par.hats[value]);
        }

        par.currentHat = par.hats[value];
        let onfinish = ()=> {
            //self.startTween(animationsKeys[2].keyFrames.concat(animationsKeys[0].keyFrames));
            if (onFinish)onFinish();
        }
        if (!par.currentHat.hat) {
            self.onLoadOBJ(par.currentHat.hatData.url, (hat)=> {
                par.currentHat.traverse((child)=> {
                    //if (child.material) {
                    //    child.material.transparent = true;
                    //    child.material.opacity = 0;
                    //}
                });
                par.currentHat.hat = hat;
                if (par.currentHat.hatData.transform.pst)hat.position.copy(par.currentHat.hatData.transform.pst);
                if (par.currentHat.hatData.transform.quad)hat.quaternion.copy(par.currentHat.hatData.transform.quad);
                if (par.currentHat.hatData.transform.scale)hat.scale.multiplyScalar(par.currentHat.hatData.transform.scale);
                par.currentHat.add(hat);

                let radius = 450;
                ['pL', 'pR'].forEach((elm, ind)=> {
                    hat[elm] = new THREE.Mesh(new THREE.SphereBufferGeometry(radius, 32, 32), new THREE.MeshPhongMaterial({color: ind == 0 ? 0xff0000 : 0x00ff00}));
                    hat[elm].visible = false;
                    hat[elm].radius = radius;
                    hat[elm].position.copy(par.currentHat.hatData.holds[elm].point);
                    par.currentHat.add(hat[elm]);
                    hat[elm].scale.multiplyScalar(0.05);
                });
                //self.scene.remove(self.transformControl);
                //self.transformControl.detach();
                //self.transformControl.attach(hat.pL);
                //self.scene.add(self.transformControl);
                setTimeout(()=> {
                    onfinish();
                }, 2500);

            }, isF);
        } else {
            onfinish();
        }
    }

    refresh() {

    }

    onFinishInitApp() {
        this.mouse = new MMouse(this);
        this.raycaster = new THREE.Raycaster();
        let _self = this,
            elem = main.gl.domElement,
            handler = (elem.addEventListener || elem.attachEvent).bind(elem);
        handler('mousemove', (e)=>this.onMouseMove(e));
        handler('mouseup', (e)=>this.onMouseUp(e));
    }

    onLoadOBJ(url, onFinish, isFirst) {
        if (url && url.match(".obj")) {
            let _self = this,
                path = url.split("/");
            let fileName = path.pop().split(".")[0];
            path = path.join("/") + "/";
            let mtlLoader = _self.mtlLoader || new THREE.MTLLoader(),
                objLoader = _self.objLoader || new THREE.OBJLoader();
            _self.mtlLoader = mtlLoader;
            _self.objLoader = objLoader;
            mtlLoader.setPath(path);
            objLoader.setPath(path);

            if (!isFirst)this.preloader.fade(true);
            this.preloader.preloaderInfo.innerText = 'Load ' + fileName;
            mtlLoader.load(fileName + '.mtl', (materials) => {
                materials.preload();
                objLoader.setMaterials(materials);
                objLoader.load(fileName + '.obj', (object) => {
                    onFinish(object);
                    if (!isFirst)this.preloader.fade();
                }, (e)=>_self.onProgress(e), (e)=> {
                    _self.onError(e);
                    onFinish();
                    _self.preloader.fade();
                });

            });
        } else {
            onFinish();
        }
    }

    onProgress(xhr) {
        if (xhr.lengthComputable) {
            this.preloader.onUpdatePreloaderStatus(xhr.loaded / xhr.total);
        }
    }

    onError(xhr) {
        console.log(xhr);
    }

    disableGUI(controllerRotationx, show) {
        controllerRotationx.__li.setAttribute("style", "display: " + (show ? "" : "none"));
        controllerRotationx.updateDisplay();
    }


    startTween(keys, onFinish) {

        //if (!this.isFinish) return;
        let arg = keys.shift(),
            _self = this;

        let duration = TWEEN.speedDuraion || 900,
            startNext = false,
            tween = new TWEEN.Tween({delta: 0}).to({delta: 1}, duration).easing(TWEEN.curEasing).onStart(function () {
                if (arg.onStart)arg.onStart();
                if (arg.bone) {
                } else {
                    for (let is = 0; is < arg.list.length; is++) {
                        //if (arg.list[is].elem) {
                        if (arg.list[is].onStart)arg.list[is].onStart();
                        //} else {
                        //}
                    }
                }

                /*_self.controls.enabled =*/
                _self.isFinish = false;
            }).onUpdate(function (delta) {

                if (delta > 0.31) {
                    if (arg.onMiddle) {
                        //TWEEN.curEasing = TWEEN.Easing.Sinusoidal.In
                        if (typeof arg.onMiddle == 'boolean') {

                        } else {
                            arg.onMiddle(keys);
                        }
                        //if (keys.length)_self.startTween(keys);
                        arg.onMiddle = true;
                        startNext = true;
                        return;
                    }
                }
                if (arg.list) {
                    for (let is = 0; is < arg.list.length; is++) {
                        if (arg.list[is].elem) {
                            arg.list[is].elem.position.lerp(arg.list[is].position, delta);
                        } else if (arg.list[is].transform) {
                            arg.list[is].bone.obj.position.lerp(arg.list[is].transform.pst, delta);
                            arg.list[is].bone.obj.quaternion.slerp(arg.list[is].transform.rotation, delta);
                        } else {
                            arg.list[is].bone.obj.quaternion.slerp(arg.list[is].value || arg.list[is].bone.obj.defQuads, delta);
                        }
                    }
                } else {
                    if (arg.bone.elem) {

                    } else if (arg.transform) {
                        arg.bone.obj.position.lerp(arg.transform.pst, delta);
                        arg.bone.obj.quaternion.slerp(arg.transform.rotation, delta);
                    } else {
                        arg.bone.obj.quaternion.slerp(arg.value || arg.bone.obj.defQuads, delta);
                    }
                }

            }).onComplete(function () {

                _self.isFinish = true;
                tween = null;
                if (arg.onComplete) arg.onComplete(keys);
                if (keys.length && !startNext) {
                    _self.startTween(keys, onFinish);
                }
            }).start();
    }

    getRandomInt(min, max) {

        return Math.floor(Math.random() * ( max - min + 1 )) + min;

    }

    onMouseMove(ev) {
    }

    onMouseUp(ev) {
        this.onSelected(ev, (intersects)=> {

            if (intersects.length) {
                //console.log(intersects[0].point);
            }

        });
    }

    onSelected(ev, callback) {
        let intersectList = this.inter(ev);
        if (intersectList && intersectList[0]) {
            this.lastInter = intersectList[0];
        }
        callback(intersectList);
    }

    inter(ev, arg = null) {
        var _self = this,
            elements = arg && arg.childs ? arg.childs : [_self.dae];

        if (!elements)return false;
        if (arg && arg.position) {
            var direction = new THREE.Vector3().subVectors(arg.target, arg.position);
            _self.raycaster.set(arg.position, direction.clone().normalize());
        } else {
            let
                mouseVector = _self.mouse.interPoint(ev);
            _self.raycaster.setFromCamera(mouseVector, _self.camera);
        }

        return _self.raycaster.intersectObjects(elements, true);
    }

    sayThank() {
        let par = this.par;
        par.shoulder = par.currentHat.hatData.animations.shoulder;
        par.elbow = par.currentHat.hatData.animations.elbow;
        par.check();
    }
}
export class MMouse {

    constructor(main) {
        this.isDown = false;
        this.main = main;
    }

    interPoint(ev) {
        let _slider = this.main.gl.domElement,
            rect = _slider.getBoundingClientRect(),
            canvasW = _slider.clientWidth,
            canvasH = _slider.clientHeight,

            _x = (ev ? ev.clientX : canvasW / 2) - rect.left,
            _y = (ev ? ev.clientY : canvasH / 2) - rect.top
            ;

        if (ev && ev.touches) {
            let firstFing = ev.touches.length ? ev.touches[0] : ev.changedTouches[0];
            _x = firstFing.clientX;
            _y = firstFing.clientY;
        }
        return new THREE.Vector2(( (_x ) / canvasW) * 2 - 1, -( (_y ) / canvasH) * 2 + 1);
    }

    cumulativeOffset(element) {
        var top = 0, left = 0;
        do {
            top += element.offsetTop || 0;
            left += element.offsetLeft || 0;
            element = element.offsetParent;
        } while (element);

        return {
            offsetLeft: top,
            offsetTop: left
        };
    }

}
export class MGui {
    constructor(main) {
        this.container = document.querySelector('.main-container');
        this.main = main;
        this.elements = ['combinations', 'resetView', 'shoulder', 'elbow', 'low_arm', 'upper_arm', 'shoulder_arm_length', 'checkInputed'];
        this.elements.forEach((e, ind)=> {
            this[e] = document.querySelector('#' + e);
            if (ind == 0) {
                this[e].addEventListener('change', (e)=>this.onModeSelect(e));
            } else if (ind == 1) {
                this[e].addEventListener('click', (e)=>this.reset(e));
            } else if (ind == 7) {
                this[e].addEventListener('click', (e)=>this.checkInputedValue(e));
            }
        });
        window.addEventListener('keyup', (e)=> {
            switch (e.keyCode) {
                case 13:
                {
                    this.reset(e);
                }
            }
        })
    }

    checkInputedValue() {

        if (!this.main.isFinish) {
            alertify.error('please wait for finish robot stuff');
        } else {

            if (!this.curMode)return alertify.error('select combination');
            if (!this.currentSlected.value)return alertify.error('please input your answer');
            let result,
                delta = 0.01,
                inputed = (+this.currentSlected.value);
            switch (this.curMode) {
                case 1:
                {
                    let a1 = +this[this.elements[4]].value,
                        a2 = +this[this.elements[3]].value,
                        a3 = +this[this.elements[2]].value
                    result = a1 * Math.sin(a2) / Math.sin(a3);
                    break;
                }
                case 2:
                {
                    let a1 = +this[this.elements[3]].value,
                        a2 = +this[this.elements[4]].value,
                        a3 = +this[this.elements[5]].value
                    result = Math.sqrt((a2 * a2 + a3 * a3 - 2 * a2 * a3 * Math.cos(a1) ));
                    break;
                }
                case 3:
                {
                    let a1 = +this[this.elements[4]].value,
                        a2 = +this[this.elements[5]].value,
                        a3 = +this[this.elements[6]].value
                    result = Math.acos((a3 * a3 - a2 * a2 - a1 * a1) / -2 * a2 * a1);
                    break;
                }
            }
            result = result.toFixed(10);
            if (inputed - delta < result && inputed + delta > result || result == inputed) {
                alertify.success('Congratulations!!!');
                this.main.sayThank();
            } else {
                alertify.error('It`s seem`s you`ve made some mistake. Here are the correct value =' + result);
            }
        }
    }

    randomInteger(min, max) {
        var rand = min - 0.5 + Math.random() * (max - min + 1)
        rand = Math.round(rand);
        return rand;
    }

    reset(e, callback) {
        this.main.selectHat(this.randomInteger(0, this.main.hats.length - 1), ()=> {
            this.onModeSelect();
            if (callback)callback();
        });
    }

    onModeSelect() {
        this.curMode = null;
        let curMode = +this[this.elements[0]].value,
            dispays = [];
        if (!curMode)return alertify.error('bad select');
        this.elements.forEach((e, ind)=> {
            if (ind > 1 && ind != 7) {
                this[e].removeAttribute('disabled');
                this[e].removeAttribute('autofocus');
                this[e].className = this[e].className.replace(' selected', '');
                this[e].parentNode.parentNode.style.display = 'none';
                this[e].value = null;
            }
        });
        switch (curMode) {
            case 2:
            {
                dispays = [3, 4, 5, 6];
                break;
            }
            case 3:
            {
                dispays = [4, 5, 6, 3];
                break;
            }
            default :
            {
                curMode = 1;
                dispays = [2, 3, 4, 6];
            }
        }
        this.curMode = curMode;
        let last = dispays.length - 1;
        dispays.forEach((e, ind)=> {
            if (ind < last) {
                this[this.elements[e]].setAttribute('disabled', true);
                this[this.elements[e]].value = this.main.par.currentHat.hatData.modes[curMode][this.elements[e]];
            } else {
                this.currentSlected = this[this.elements[e]];
                this[this.elements[e]].className += ' selected';
                this[this.elements[e]].setAttribute('autofocus', true);
            }
            this[this.elements[e]].parentNode.parentNode.style.display = '';
        });

        this.container.style.display = 'block';
    }
}
