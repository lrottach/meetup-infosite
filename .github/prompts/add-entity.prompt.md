# Prompt: Add New Domain Entity with Full CRUD

You are an AI coding assistant enhancing the .NET backend of this repository by adding a new domain entity and its full CRUD API surface.

## 1. Collect Requirements First

Ask the user the following (do NOT generate code until answered):

1. Entity name (PascalCase singular) e.g. `Product`
2. Fields: for each field gather:
   - name
   - data type (C# primitive, DateTime, decimal, string, Guid, enum?)
   - required? (y/n)
   - constraints (max length, range, regex, allowed values)
   - nullable? (if not required)
3. Relationships (optional):
   - One-to-many? (parent/child)
   - Many-to-many?
   - Foreign keys needed? (specify target entity + cardinality)
4. Indexes or uniqueness constraints.
5. Any computed or read-only fields.
6. Whether soft-delete is needed.
7. Paging/sorting/filtering expectations for list queries.

Confirm back a structured spec table before generating code.

## 2. Assumptions (if missing)

If a field lacks constraints, assume none. If data type unclear, ask. If relationships unclear, proceed without them but mark TODO comments.

## 3. Generated Artifacts (Minimal API Style)

Produce (under a presumed backend project root `backend/`):

- `Domain/Entities/{EntityName}.cs`: Immutable (where sensible) record or class with validation hints in XML comments.
- `Application/DTOs/{EntityName}Dto.cs` and `Create{EntityName}Dto.cs` / `Update{EntityName}Dto.cs`
- `Application/Interfaces/I{EntityName}Service.cs`
- `Application/Services/{EntityName}Service.cs`
- `Infrastructure/Repositories/I{EntityName}Repository.cs` & `Infrastructure/Repositories/{EntityName}Repository.cs` (in-memory stub if no DB layer yet)
- `Api/Endpoints/{EntityName}Endpoints.cs`: Extension method configuring CRUD routes:
  - POST /api/{entityNameLower}
  - GET /api/{entityNameLower}/{id}
  - GET /api/{entityNameLower} (supports paging & filtering if specified)
  - PUT /api/{entityNameLower}/{id}
  - DELETE /api/{entityNameLower}/{id}

## 4. Program.cs Wiring

Instruct to:

- Register repository + service in DI.
- Map endpoints via `app.Map{EntityName}Endpoints();`
- (If soft-delete) ensure filter logic excludes deleted records by default.

## 5. Validation & Error Handling

- Use data annotations in DTOs (`[Required]`, `[StringLength]`, `[Range]`, etc.)
- Return ProblemDetails for not found / validation failures.
- For update, verify route id matches DTO id (if present).

## 6. Service Responsibilities

- Map DTOs <-> Entity (create + update)
- Enforce uniqueness constraints before persistence
- Implement paging (skip/take) and simple filtering where requested

## 7. Repository Stub (Until DB Exists)

Use an in-memory `ConcurrentDictionary<Guid, Entity>` or list with thread-safe operations. Provide TODO comments for future EF Core implementation.

## 8. Response Shapes

- Create -> 201 Created + Location header
- Get -> 200 (entity dto) or 404
- List -> 200 with array; if paging provided include minimal envelope `{ items, totalCount, page, pageSize }`
- Update -> 200 updated dto or 404
- Delete -> 204 No Content (idempotent; deleting non-existent returns 204)

## 9. Security / Future Hooks

Add TODO comments for:

- Authorization attributes
- Logging
- Validation enhancements (FluentValidation) once library added

## 10. Output Formatting

Return final answer as a consolidated plan followed by code blocks grouped per file (title lines only) so user can copy. Keep explanations concise.

## 11. If Backend Not Present

If `backend/` project is missing on current branch, output a short instruction to first create it:

```
dotnet new webapi -minimal -o backend
```

Then re-run the entity generation prompt.

## 12. Final Confirmation

Before presenting code, show a summary of the spec in markdown table:
| Field | Type | Required | Nullable | Constraints | Notes |

Wait for user "confirm" if any ambiguity remains; otherwise proceed.

---

Use these steps every time this prompt is invoked to add an entity.
