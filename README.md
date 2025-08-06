# Curso Propedéutico de JavaScript - Refuerzo de Lógica de Programación

Este repositorio contiene los ejercicios y retos prácticos del curso **"Fundamentos de JavaScript"** diseñado para nivelar estudiantes antes del inicio del bootcamp fullstack. Los ejercicios combinan HTML, CSS y JavaScript básico para reforzar la lógica de programación.

## 📋 Índice

- [Descripción del curso](#🎯-descripción-del-curso)
- [Requerimientos del sistema](#💻-requerimientos-del-sistema)
- [Instalación paso a paso](#🛠️-instalación-paso-a-paso)
- [Estructura del proyecto](#📁-estructura-del-proyecto)
- [Cómo usar este repositorio](#🚀-cómo-usar-este-repositorio)
- [Flujo de trabajo](#💻-flujo-de-trabajo)
- [Solución de problemas](#🔧-solución-de-problemas)
- [Recursos adicionales](#📚-recursos-adicionales)
- [Contacto y soporte](#📧-contacto-y-soporte)

## 🎯 Descripción del curso

Este curso está diseñado para:

- ✅ Reforzar la lógica de programación básica
- ✅ Nivelar conocimientos antes del bootcamp fullstack
- ✅ Practicar con HTML, CSS y JavaScript
- ✅ Desarrollar habilidades de resolución de problemas

## 💻 Requerimientos del sistema

### 📋 Requerimientos mínimos

#### Hardware

- **Procesador**: Dual-core 2.0 GHz o superior
- **RAM**: 4 GB mínimo
- **Almacenamiento**: 5 GB de espacio libre
- **Conexión a Internet**: Estable para descargas

#### Software

- **Sistema Operativo**:
  - Windows 10/11
  - macOS 10.15 o superior
  - Ubuntu 18.04 o superior

### 🌟 Requerimientos recomendados

#### Hardware

- **Procesador**: Quad-core 2.5 GHz o superior
- **RAM**: 8 GB o más
- **Almacenamiento**: 10 GB de espacio libre (SSD preferible)
- **Monitor**: 1920x1080 o superior

#### Software

- **Sistema Operativo**: Versiones más recientes para mejor rendimiento

## 🛠️ Instalación paso a paso

### 1. Instalar Node.js

Node.js es fundamental para ejecutar JavaScript fuera del navegador.

#### Windows

1. Ve a [nodejs.org](https://nodejs.org/)
2. Descarga la versión **LTS** (recomendada)
3. Ejecuta el instalador descargado
4. Sigue el asistente (acepta las opciones por defecto)
5. Reinicia tu computadora

#### macOS

```bash
# Opción 1: Desde la página oficial
# Ve a https://nodejs.org/ y descarga la versión LTS

# Opción 2: Con Homebrew (si lo tienes instalado)
brew install node
```

#### Linux (Ubuntu/Debian)

```bash
# Actualizar repositorios
sudo apt update

# Instalar Node.js y npm
sudo apt install nodejs npm

# Verificar instalación
node --version
npm --version
```

### 2. Verificar instalación de Node.js

Abre tu terminal y ejecuta:

```bash
node --version
npm --version
```

Deberías ver algo como:

```
v20.x.x
10.x.x
```

### 3. Instalar Git

Git es necesario para el control de versiones.

#### Windows

1. Ve a [git-scm.com](https://git-scm.com/)
2. Descarga Git para Windows
3. Ejecuta el instalador
4. **Importante**: En "Adjusting your PATH environment", selecciona "Git from the command line and also from 3rd-party software"
5. Usa las opciones por defecto para el resto

#### macOS

```bash
# Git suele venir preinstalado, verificar con:
git --version

# Si no está instalado, usar Homebrew:
brew install git
```

#### Linux

```bash
sudo apt install git
```

### 4. Configurar Git

```bash
git config --global user.name "Tu Nombre"
git config --global user.email "tu.email@ejemplo.com"
```

### 5. Instalar Visual Studio Code

#### Todas las plataformas

1. Ve a [code.visualstudio.com](https://code.visualstudio.com/)
2. Descarga la versión para tu sistema operativo
3. Instala siguiendo las instrucciones
4. **Windows**: Marca "Add to PATH" durante la instalación

#### Extensiones recomendadas para VS Code

Instala estas extensiones desde el marketplace:

- **Live Server** - Para servir archivos HTML
- **Prettier** - Formateo automático de código
- **ES7+ React/Redux/React-Native snippets** - Snippets útiles
- **JavaScript (ES6) code snippets** - Más snippets
- **Auto Rename Tag** - Para HTML
- **Bracket Pair Colorizer** - Colores en paréntesis

### 6. Terminal recomendada

#### Windows

- **Opción 1**: [Windows Terminal](https://apps.microsoft.com/store/detail/windows-terminal/9N0DX20HK701) (Microsoft Store)
- **Opción 2**: [Cmder](https://cmder.app/) - Terminal portátil
- **Opción 3**: Usar la terminal integrada de VS Code

#### macOS

- **Terminal nativa** (ya incluida)
- **iTerm2**: [iterm2.com](https://iterm2.com/) - Terminal mejorada
- **Oh My Zsh**: [ohmyz.sh](https://ohmyz.sh/) - Para personalizar zsh

#### Linux

- **Terminal nativa** (ya incluida)
- La mayoría de distribuciones incluyen terminales excelentes

## 📁 Estructura del proyecto

```
2025-3-Javascript/
├── 01.Retos/                     # Ejercicios prácticos
│   ├── reto-1-estructura-perdida/
│   │   ├── index.html
│   │   ├── style.css
│   │   └── README.md
│   ├── reto-2-boton-invisible/
│   ├── reto-3-hazme-hablar/
│   ├── reto-4-tarjeta-con-estilo/
│   ├── reto-5-tarjeta-oculta/
│   └── reto-6-pagina-responsive/
├── 02.Clases/                    # Material de clases
├── 03.Tareas/                    # Tareas y ejercicios
└── README.md                     # Este archivo
```

## 🚀 Cómo usar este repositorio

### Paso 1: Crear tu propia copia del proyecto

**⚠️ Importante**: No hagas fork. Crearás tu propio repositorio desde cero.

1. **Crea un nuevo repositorio en tu GitHub**:

   - Ve a [github.com](https://github.com)
   - Clic en "New repository"
   - Nombre: `2025-3-javascript-[tu-nombre]` (ejemplo: `2025-3-javascript-juan`)
   - ✅ Marca "Add a README file"
   - ✅ Marca "Add .gitignore" y selecciona "Node"
   - Clic en "Create repository"

2. **Clona TU repositorio**:

   ```bash
   git clone https://github.com/tu-usuario/2025-3-javascript-tu-nombre.git
   cd 2025-3-javascript-tu-nombre
   ```

3. **Descarga los archivos del curso**:

   - Ve al repositorio original: https://github.com/Inadaptados/2025-3-Javascript
   - Clic en "Code" → "Download ZIP"
   - Descomprime el ZIP
   - Copia TODOS los archivos y carpetas a tu repositorio clonado

4. **Sube los archivos a tu repositorio**:
   ```bash
   git add .
   git commit -m "Agrego archivos iniciales del curso"
   git push origin main
   ```

### Paso 2: Configurar el entorno de desarrollo

1. **Abre el proyecto en VS Code**:

   ```bash
   code .
   ```

2. **Instala Live Server** (si no lo tienes):
   - Ctrl+Shift+X (Cmd+Shift+X en Mac)
   - Busca "Live Server"
   - Clic en "Install"

## 💻 Flujo de trabajo

### Trabajando en los retos

1. **Navega a un reto**:

   ```bash
   cd 01.Retos/reto-1-estructura-perdida
   ```

2. **Abre los archivos en VS Code**:

   - Clic derecho en `index.html`
   - "Open with Live Server"

3. **Desarrolla tu solución**:

   - Edita los archivos según las instrucciones del README
   - Guarda frecuentemente (Ctrl+S)
   - El navegador se actualizará automáticamente

4. **Guarda tu progreso**:
   ```bash
   # Desde la raíz del proyecto
   git add .
   git commit -m "Solución del reto-1-estructura-perdida"
   git push origin main
   ```

### Manteniendo tu progreso actualizado

Haz commits frecuentes con mensajes descriptivos:

```bash
git add .
git commit -m "Progreso en reto-2: implementé la funcionalidad del botón"
git push origin main
```

## 🔧 Solución de problemas

### Problema: "node no se reconoce como comando"

**Solución Windows**:

1. Reinicia tu computadora después de instalar Node.js
2. Si persiste, agrega Node.js manualmente al PATH:
   - Busca "Variables de entorno"
   - Edita la variable PATH
   - Agrega: `C:\Program Files\nodejs`

**Solución macOS/Linux**:

```bash
# Verifica si Node está en PATH
echo $PATH

# Si no aparece, agrega a tu .bashrc o .zshrc:
export PATH="/usr/local/bin:$PATH"
```

### Problema: Live Server no funciona

1. Verifica que la extensión esté instalada
2. Clic derecho en un archivo `.html`
3. Si no aparece "Open with Live Server", reinstala la extensión

### Problema: Git no reconoce cambios

```bash
# Verifica el estado
git status

# Si no aparecen archivos, puede ser el .gitignore
git add -f archivo-especifico.js
```

### Problema: Errores de permisos en macOS/Linux

```bash
# Para npm
sudo chown -R $(whoami) ~/.npm
```

## 📚 Recursos adicionales

### Documentación oficial

- [MDN Web Docs - JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript)
- [W3Schools JavaScript](https://www.w3schools.com/js/)

### Editores de código online (para practicar)

- [CodePen](https://codepen.io/)
- [JSFiddle](https://jsfiddle.net/)
- [Repl.it](https://replit.com/)

### Extensiones de navegador útiles

- **Developer Tools** (ya incluidas en Chrome/Firefox)
- **JSONView** - Para visualizar JSON
- **Wappalyzer** - Detecta tecnologías web

## 📧 Contacto y soporte

### Durante las clases

- Levanta la mano para dudas inmediatas
- Usa el chat para preguntas rápidas

### Fuera del horario de clase

- **Issues en GitHub**: Crea un issue en tu repositorio con tu pregunta
- **Discord/Slack del curso**: Usa los canales designados
- **Email**: [email-del-instructor]

### Antes de preguntar

1. ✅ ¿Revisé el README del reto específico?
2. ✅ ¿Busqué el error en Google?
3. ✅ ¿Probé reiniciar VS Code/navegador?
4. ✅ ¿Verifiqué que mi código no tenga errores de sintaxis?

---

## 🎉 ¡Bienvenido al curso!

¡Estás listo para comenzar! Recuerda:

- 🐢 **Ve despacio**: Es mejor entender bien que avanzar rápido
- 🔄 **Practica constantemente**: La programación se aprende haciendo
- ❓ **Pregunta sin miedo**: No hay preguntas tontas
- 💪 **Sé paciente contigo mismo**: Todos empezamos desde cero
- 🚀 **Disfruta el proceso**: Programar puede ser muy divertido

**¡Mucho éxito en tu journey de programación!** 🌟

---

_Última actualización: Enero 2025_
_Versión del curso: 2025-3_
