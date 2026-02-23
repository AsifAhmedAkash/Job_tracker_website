const jobsContainer = document.getElementById("jobs-container");

document.getElementById("total-job-card-value").innerText = jobs.length;

// Loop through the jobs array and create a card for each job
let currentFilter = "ALL";
document.getElementById("filter-all").addEventListener("click", function () {
  renderJobs("ALL");
  currentFilter = "ALL";

});
document.getElementById("filter-interview").addEventListener("click", function () {
  renderJobs("INTERVIEW");
  currentFilter = "INTERVIEW";
});
document.getElementById("filter-rejected").addEventListener("click", function () {
  renderJobs("REJECTED");
  currentFilter = "REJECTED";
});

// for (let i = 0; i < jobs.length; i++) {
//   const job = jobs[i];

//   const card = document.createElement("div");
//   card.dataset.id = job.id;
//   card.className = "relative card-body shadow-sm mb-2 bg-base-100";



//   card.innerHTML = `
//   <!-- Delete Button -->
//   <button 
//     class="absolute top-4 right-4 border border-gray-300 rounded-md p-2 
//            text-gray-500 hover:bg-red-500 hover:text-white 
//            hover:border-red-500 transition duration-200 delete-btn">
//     <i class="fa-regular fa-trash-can"></i>
//   </button>

//   <h2 class="card-title">${job.company}</h2>
//   <p class="text-sm font-semibold">${job.title}</p>
//   <p class="text-sm text-gray-500">
//     ${job.location} • ${job.type} • ${job.salary}
//   </p>

//   <div>
//   <div class="status-badge bg-[#EEF4FF] rounded-md py-[8px] px-[12px] mt-2 inline-block text-xs font-semibold text-gray-700">
//     ${job.status}
//   </div>
// </div>

//   <p class="mt-2">${job.description}</p>

//   <div class="card-actions mt-4">
//     <button class="btn btn-outline btn-success hover:btn-success">
//       Interview
//     </button>
//     <button class="btn btn-outline btn-error hover:btn-error">
//       Rejected
//     </button>
//   </div>
// `;

//   // console.log(job.status);
//   jobsContainer.appendChild(card);
// }

jobsContainer.addEventListener("click", function (event) {
  if (event.target.closest(".delete-btn")) {
    const cardToDelete = event.target.closest(".card-body");
    const jobId = parseInt(cardToDelete.dataset.id);
    cardToDelete.remove();


    const totalJobCount = document.getElementById("total-job-card-value");
    totalJobCount.innerText = parseInt(totalJobCount.innerText) - 1;
    const index = jobs.findIndex(job => job.id === jobId);
    if (index !== -1) {
      jobs.splice(index, 1);
    }
    renderJobs(currentFilter);
    console.log(jobs);

  }
});


jobsContainer.addEventListener("click", function (event) {
  const card = event.target.closest(".card-body");
  if (!card) return;

  const jobId = Number(card.dataset.id);
  const job = jobs.find(j => j.id === jobId);
  const statusBadge = card.querySelector(".status-badge");

  // console.log(job);
  // console.log(statusBadge);

  if (event.target.closest(".btn-success")) {

    job.status = "INTERVIEW";
    // statusBadge.innerText = job.status;
    console.log(currentFilter);
    renderJobs(currentFilter);
    statusBadge.classList.remove(
      "bg-[#EEF4FF]", "text-gray-700", "bg-red-100", "text-red-700"
    );

    statusBadge.classList.add("bg-green-100", "text-green-700");
  }

  if (event.target.closest(".btn-error")) {
    job.status = "REJECTED";
    console.log(currentFilter);
    renderJobs(currentFilter);
    statusBadge.innerText = job.status;
    statusBadge.classList.remove(
      "bg-[#EEF4FF]", "text-gray-700", "bg-green-100", "text-green-700"
    );

    statusBadge.classList.add("bg-red-100", "text-red-700");
  }

  // console.log(jobs);


});

function renderJobs(filter = "ALL") {
  jobsContainer.innerHTML = "";

  let filteredJobs = jobs;

  if (filter === "INTERVIEW") {
    filteredJobs = jobs.filter(job => job.status === "INTERVIEW");
  }

  if (filter === "REJECTED") {
    filteredJobs = jobs.filter(job => job.status === "REJECTED");
  }

  const countElement = document.getElementById("available-jobs-filter-count");
  countElement.innerText =
    `${filteredJobs.length} ${filteredJobs.length === 1 ? "job" : "jobs"}`;


  if (filteredJobs.length === 0) {
    jobsContainer.innerHTML = `
      <div class="text-center text-gray-400 py-6">
        No jobs found.
      </div>
    `;
    return;
  }

  for (let i = 0; i < filteredJobs.length; i++) {
    const job = filteredJobs[i];

    const card = document.createElement("div");
    card.className = "relative card-body shadow-sm mb-2 bg-base-100";
    card.dataset.id = job.id;

    card.innerHTML = `
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
        <button class="btn btn-outline btn-success">Interview</button>
        <button class="btn btn-outline btn-error">Rejected</button>
      </div>
    `;

    jobsContainer.appendChild(card);
  }
}