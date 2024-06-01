export async function getCool() {
  const response = await fetch("/api/");
  const data = await response.json();
  return data;
}

export async function getDocCool(id: string) {
  const response = await fetch(`/api/sounds/${id}`);
  const data = await response.json();
  return data;
}
