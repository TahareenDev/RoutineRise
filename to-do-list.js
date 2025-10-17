 const taskInput = document.getElementById('taskInput');

        taskInput.addEventListener('keypress', function(e) {
            if(e.key === 'Enter') addTask();
        });

        function addTask() {
            const taskText = taskInput.value.trim();
            if(taskText === '') return;

            const li = document.createElement('li');

            li.innerHTML = `
                <div class="task-left">
                    <input type="checkbox" onchange="toggleTask(this)">
                    <span>${taskText}</span>
                </div>
                <button class="delete-btn" onclick="deleteTask(this)">🗑️</button>
            `;

            document.getElementById('taskList').appendChild(li);
            taskInput.value = '';
        }

        function deleteTask(button) {
            button.parentElement.remove();
        }

        function toggleTask(checkbox) {
            const span = checkbox.nextElementSibling;
            if(checkbox.checked) {
                span.classList.add('completed');
            } else {
                span.classList.remove('completed');
            }
        }

    const fsBtn = document.getElementById("fsBtn");

    fsBtn.addEventListener("click", () => {
      if (!document.fullscreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
        if (document.documentElement.requestFullscreen) {
          document.documentElement.requestFullscreen();
        } else if (document.documentElement.webkitRequestFullscreen) {
          document.documentElement.webkitRequestFullscreen();
        } else if (document.documentElement.msRequestFullscreen) {
          document.documentElement.msRequestFullscreen();
        }
        fsBtn.textContent = "Exit";
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
          document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen();
        }
        fsBtn.textContent = "Fullscreen";
      }
    });

    document.addEventListener("fullscreenchange", () => {
      if (document.fullscreenElement) {
        fsBtn.textContent = "Exit";
      } else {
        fsBtn.textContent = "Fullscreen";
      }
    });
    document.addEventListener("webkitfullscreenchange", () => {
      if (document.webkitFullscreenElement) {
        fsBtn.textContent = "Exit";
      } else {
        fsBtn.textContent = "Fullscreen";
      }
    });
    document.addEventListener("msfullscreenchange", () => {
      if (document.msFullscreenElement) {
        fsBtn.textContent = "Exit";
      } else {
        fsBtn.textContent = "Fullscreen";
      }
    });