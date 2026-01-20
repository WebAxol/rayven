<div align="center">
<pre>
 ______    _______  __   __  __   __  _______  __    _ 
|    _ |  |   _   ||  | |  ||  | |  ||       ||  |  | |
|   | ||  |  |_|  ||  |_|  ||  |_|  ||    ___||   |_| |
|   |_||_ |       ||       ||       ||   |___ |       |
|    __  ||       ||_     _||       ||    ___||  _    |
|   |  | ||   _   |  |   |   |     | |   |___ | | |   |
|___|  |_||__| |__|  |___|    |___|  |_______||_|  |__|
---------------------------------------------------------------

Experimental WebGL-based rendering engine that simulates mirrors using raycasting
</pre>
</div>

![Rayven - ray-based renderer](https://github.com/WebAxol/Mirroware/blob/main/img/banner.png)

## Introduction

Rayven is an emerging rendering system, inspired on the classing raycasting technique employed by games like <i>Wolfenstein 3D</i>. It introduces recursive ray bouncing to simulate reflections, while being much lighter than a raytracer. This engine is intended for retro-styled games and individual projects.

### Main features

- 🏹 Raycasting system
- 🪞 Recursive mirrors
- 🔦 Basic lighting (distance based)
- 🎞️ Built-in mini-map
- 🗺️ Atlas-based texturing
- 🎮 WASD movement control

## Architecture

This project is built over the existing [Kernox](https://github.com/WebAxol/Kernox) framework, following an Entity-Component-System (ECS) architecture. The engine itself is a `KernoAddon` (an addon that integrates to the application instance.)

## Try demo

1. Clone the repository
``` bash
git clone https://github.com/WebAxol/rayven.git
```
2. Install dependancies 
``` bash
npm i
```
3. Init the development server
``` bash
npm run dev
```
4. Connect to URL (http://localhost:<PORT_PROVIDED_BY_VITE>)

## Contribute

This is an open-source project; all contributions are well received as long as they respect our guidelines:

### Recomended flow:

1. Create a new branch

```
git checkout -b feature/my-new-feature
```

Use prefixes such as:

- `feature/` for new functionality
- `fix/` or bugfix/ for bug fixes
- `refactor/` for internal changes without behavior impact

2. Make atomic and consistent commits
Each commit should represent a single logical change and include a clear, conventional message:
```
git commit -m "refactor: replaced direct imports by dependancy-injection at 'systems/MySystem.ts'..."
```
#### Guidelines:

- Avoid mixing unrelated changes in the same commit
- Prefer imperative, concise commit messages

3. Rebase your branch onto the latest `main`
```
git checkout main
git pull
git checkout feature/my-new-feature
git rebase main
```
This keeps the history linear and avoids unnecessary merge commits.

If conflicts arise, resolve them carefully and continue the rebase:

```
git rebase --continue
```

4. Create an upstream branch to push your changes

```
git push -u origin feature/my-new-feature
```
This allows future commits to be pushed with:
```
git push
```

5. Open a Pull Request

Once pushed:

- Open a Pull Request against main
- Clearly describe what the change does and why it is needed
- Reference related issues if applicable
