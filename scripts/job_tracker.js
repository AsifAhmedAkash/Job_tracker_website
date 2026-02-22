const jobsContainer = document.getElementById("jobs-container");

document.getElementById("total-job-card-value").innerText = jobs.length;

// Loop through the jobs array and create a card for each job

for (let i = 0; i < jobs.length; i++) {
    const job = jobs[i];

    const card = document.createElement("div");
    card.className = "relative card-body shadow-sm mb-2 bg-base-100";

    card.innerHTML = `
  <!-- Delete Button -->
  <button 
    class="absolute top-4 right-4 border border-gray-300 rounded-md p-2 
           text-gray-500 hover:bg-red-500 hover:text-white 
           hover:border-red-500 transition duration-200 delete-btn">
    <i class="fa-regular fa-trash-can"></i>
  </button>

  <h2 class="card-title">${job.company}</h2>
  <p class="text-sm font-semibold">${job.title}</p>
  <p class="text-sm text-gray-500">
    ${job.location} • ${job.type} • ${job.salary}
  </p>

  <div>
  <div class="status-badge bg-[#EEF4FF] rounded-md py-[8px] px-[12px] mt-2 inline-block text-xs font-semibold text-gray-700">
    ${job.status}
  </div>
</div>

  <p class="mt-2">${job.description}</p>

  <div class="card-actions mt-4">
    <button class="btn btn-outline btn-success hover:btn-success">
      Interview
    </button>
    <button class="btn btn-outline btn-error hover:btn-error">
      Rejected
    </button>
  </div>
`;

    jobsContainer.appendChild(card);
}

// Add event listener for delete buttons

jobsContainer.addEventListener("click", function (event) {
    if (event.target.closest(".delete-btn")) {
        const cardToDelete = event.target.closest(".card-body");
        cardToDelete.remove();
        const totalJobCount = document.getElementById("total-job-card-value");
        totalJobCount.innerText = parseInt(totalJobCount.innerText) - 1;
        jobs.splice(jobs.indexOf(job), 1);

    }
});

//add event listeners for interview and rejected buttons
jobsContainer.addEventListener("click", function (event) {
    const card = event.target.closest(".card-body");
    if (!card) return;

    const statusBadge = card.querySelector(".status-badge");

    if (event.target.closest(".btn-success")) {
        statusBadge.innerText = "INTERVIEW";

        statusBadge.classList.remove(
            "bg-[#EEF4FF]",
            "text-gray-700",
            "bg-red-100",
            "text-red-700"
        );

        statusBadge.classList.add("bg-green-100", "text-green-700");
    }

    if (event.target.closest(".btn-error")) {
        statusBadge.innerText = "REJECTED";

        statusBadge.classList.remove(
            "bg-[#EEF4FF]",
            "text-gray-700",
            "bg-green-100",
            "text-green-700"
        );

        statusBadge.classList.add("bg-red-100", "text-red-700");
    }
});
