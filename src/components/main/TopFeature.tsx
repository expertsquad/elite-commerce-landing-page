import PanelContent from "../ui/PanelContent";

const TopFeature = () => {
  return (
    <div className="main-container my-10 text-center">
      {/* Feature section header and description */}
      <h2 className="text-3xl mb-4 ">
        Solution-wise Features of Elite Commerce
      </h2>
      <h4>
        Meet the dynamic features of Elite Commerce that comes with Customer
        Panel, Admin Panel, and other solutions.
      </h4>

      <PanelContent />
    </div>
  );
};

export default TopFeature;
