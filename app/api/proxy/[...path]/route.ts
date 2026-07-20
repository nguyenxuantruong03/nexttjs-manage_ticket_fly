import { authFetch } from "@/lib/http/authFetch";

type Context = {
  params: Promise<{
    path: string[];
  }>;
};

async function proxy(request: Request, { params }: Context) {
  const { path } = await params;

  const pathname = "/" + path.join("");

  const search = new URL(request.url).search;

  const response = await authFetch(pathname + search, {
    method: request.method,
    headers: request.headers,
    body:
      request.method === "GET" || request.method === "HEAD"
        ? undefined
        : await request.text(),
  });

  return new Response(response.body, {
    status: response.status,
    headers: response.headers,
  });
}

export const GET = proxy;
export const POST = proxy;
export const PUT = proxy;
export const PATCH = proxy;
export const DELETE = proxy;
