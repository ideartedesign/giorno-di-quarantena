<template>
    <section class="page">

        <small v-if="loading">
            Caricamento ..
        </small>
        
        <canvas ref="canvas" />

        <div class="actions">
            <h1>Corona virus 3D Model</h1>
            <a
                title="Corona virus 3D Model"
                class="btn margin padding outline rounded"
                rel="noopener"
                href="https://spline.design/coronavirus3d/"
                target="_blank"
            >
                scopri di più >
            </a>
        </div>
        
    </section>
</template>

<script>
    // ThreeJs
    import * as THREE from 'three';

    // Three Utils
    const orbitControlsImporter = () => import(
                'three/examples/jsm/controls/OrbitControls'
            )
            .then(
                m => m.default || m
            )
          , fbxLoaderImport = () => import(
              'three/examples/jsm/loaders/FBXLoader'
            )
            .then(
                m => m.default || m
            )
          // Canvas sketch
          , settings = {
              // Make the loop animated
              animate: true,
              // Get a WebGL canvas rather than 2D
              context: 'webgl',
              // Turn on antialias
              attributes: {
                  antialias: true,
              },
          };

    // Page
    export default {
        name: 'three',
        data: () => (
            {
                loading: true,
                fbxPath: '/fbx/coronavirus3d.fbx',
                sketchManager: null,
            }
        ),
        mounted() {

            this.$nextTick(
                async() => {

                    // Suggested way
                    try {

                        this.sketchManager = await this.$sketch(
                            {
                                ... settings,
                                canvas: this.$refs.canvas,
                            },
                            this.sketch,
                        );

                    } catch( e ) {

                        console.error(
                            e
                        );

                    }

                },
            );

        },
        beforeDestroy() {

            this.sketchManager && this.sketchManager.unload();

        },
        methods: {
            // Sketch
            async sketch(
                {
                    context,
                    canvas,
                    width,
                    height,
                    pixelRatio,
                }
            ) {

                const { OrbitControls } = await orbitControlsImporter()
                      , { FBXLoader } = await fbxLoaderImport()
                      , aspectRatio = width / height
                      , realPixelRatio = pixelRatio > 3 ? 3 : pixelRatio
                      // Create a renderer
                      , renderer = new THREE.WebGLRenderer(
                          {
                              context,
                          }
                      )
                      , camera = new THREE.PerspectiveCamera(
                          45,
                          aspectRatio,
                          0.001,
                          1000
                      )
                      , controls = new OrbitControls(
                          camera,
                          canvas
                      )
                      , geometry = new THREE.PlaneBufferGeometry(
                          aspectRatio,
                          1,
                          45,
                          45,
                      )
                      // Materials
                      , material = new THREE.ShaderMaterial(
                          {
                              //   vertexShader,
                              //   fragmentShader,
                              //   extensions: {
                              //       derivatives: '#extension GL_OES_standard_derivatives : enable',
                              //   },
                              uniforms: {
                                  time: {
                                      type: 'f',
                                      value: 0,
                                  },
                                  resolution: {
                                      type: 'v2',
                                      value: new THREE.Vector2(
                                          width,
                                          height,
                                      ),
                                  },
                                  uvRate1: {
                                      value: new THREE.Vector2(
                                          1,
                                          1
                                      ),
                                  },
                              },
                          }
                      )
                      , plane = new THREE.Mesh(
                          geometry,
                          material
                      )
                      // Scene
                      , scene = new THREE.Scene()
                ;

                // Renderer things
                renderer.setPixelRatio(
                    realPixelRatio
                );

                renderer.setSize(
                    width,
                    height
                );

                // Camera things
                camera.position.set(
                    1,
                    1,
                    90
                );

                camera.updateProjectionMatrix();

                // Scene things
                // scene.add(
                //     plane
                // );

                // model
                const loader = new FBXLoader();

                loader.load(
                    this.fbxPath,
                    object => {

                        this.loading = false;

                        object.scale.x = - 5;
                        object.scale.y = - 5;
                        object.scale.z = - 5;
                        
                        console.info(
                            object
                        );

                        scene.add(
                            object 
                        );

                    } 
                );

                // Render our sketch
                return {
                    // Handle resize events here
                    resize(
                        {
                            pixelRatio,
                            viewportWidth,
                            viewportHeight,
                        }
                    ) {

                        renderer.setPixelRatio(
                            pixelRatio
                        );

                        renderer.setSize(
                            viewportWidth,
                            viewportHeight
                        );

                        material.uniforms.resolution.value.x = viewportWidth;
                        material.uniforms.resolution.value.y = viewportHeight;

                        camera.aspect = viewportWidth / viewportHeight;

                        camera.updateProjectionMatrix();

                    },
                    // And render events here
                    render: (
                        { time }
                    ) => {

                        // Timing
                        material.uniforms.time.value = time;

                        plane.rotateX(
                            0.001
                        );
                        plane.rotateY(
                            0.001
                        );

                        // Controls
                        controls.update();

                        // Render
                        renderer.render(
                            scene,
                            camera
                        );

                    },
                    // Dispose of WebGL context (optional)
                    unload() {

                        renderer.dispose();

                    },
                };

            },
        },
        head() {

            return {
                titleTemplate: 'Modello 3D Covid - %s',
                link: [
                    {
                        once: true,
                        hid: 'preload-coronavirus-3d',
                        rel: 'preload',
                        as: 'fetch',
                        href: this.fbxPath,
                        crossorigin: true,
                    },
                ],
            };
        
        },
    };
</script>

<style
    scoped
    lang="scss"
    src="./style.scss"
></style>

<style scoped lang="scss">
    .page {

        overflow: hidden;

        canvas {

            width: 100%;
            height: 100%;
            min-height: 600px;
            border-radius: 6px;
            pointer-events: none;

        }

    }
</style>