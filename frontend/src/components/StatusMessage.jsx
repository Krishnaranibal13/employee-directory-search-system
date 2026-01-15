function StatusMessage({ type, message }) {
  const colors = {
    info: "#2563eb",
    error: "#dc2626",
    warning: "#ca8a04",
  };

  return (
    <p className="status-text" style={{ color: colors[type] }}>
      {message}
    </p>
  );
}

export default StatusMessage;
