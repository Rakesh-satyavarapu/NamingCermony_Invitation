export const createOpeningController = (setStage) => {

  const openEnvelope = () => {
    setStage("ganesha");
  };

  const showBlessings = () => {
    setStage("blessings");
  };

  const enterInvitation = () => {
    setStage("complete");
  };

  const skipOpening = () => {
    setStage("complete");
  };

  return {
    openEnvelope,
    showBlessings,
    enterInvitation,
    skipOpening
  };
};