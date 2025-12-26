const DashboardPage = () => {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">
          Feature Flags
        </h1>
      </div>

      {/* Flags table comes here */}
      <div className="border rounded-md p-4 text-muted-foreground">
        Flags list table
      </div>
    </div>
  );
};

export default DashboardPage;
