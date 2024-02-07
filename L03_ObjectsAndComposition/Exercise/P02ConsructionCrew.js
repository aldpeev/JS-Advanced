function hydrateWorker(workerObj) {
  if (workerObj.dizziness) {
    workerObj.levelOfHydrated += workerObj.experience * workerObj.weight * 0.1;
    workerObj.dizziness = false;
  }

  return workerObj;
}

console.log(
  hydrateWorker({
    weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true,
  })
);
